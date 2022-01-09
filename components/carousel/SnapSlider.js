import React, { Children } from 'react';
import { SnapSliderWrapper } from "./SnapSlider.styled";
import CarouselContext from '../../contexts/carousel/CarouselContext';
import { debounce } from '../../utils/debounce';

export const SnapSlider = ({ children }) => {
    const currentItem = React.useRef(null);
    const sliderRef = React.useRef(null);
    const { goTo, activeItem, setItemsLength } = React.useContext(CarouselContext);

    React.useEffect(() => {
        setItemsLength(Children.count(children));
    }, [children, setItemsLength]);

    const moveToItem = React.useCallback(() => {
        const slider = sliderRef.current;

        if (!slider) {
            return null;
        }

        const finalPosition = slider.offsetWidth * activeItem;
        
        slider.scrollLeft = finalPosition;
        currentItem.current = activeItem;
    }, [activeItem]);

    React.useEffect(() => {
        if (currentItem.current !== activeItem) {
            moveToItem();
        }
    }, [activeItem, moveToItem]);

    const verifyActiveItem = () => {
        const { scrollLeft, offsetWidth } = sliderRef.current;
        const newActiveItem = Math.round(scrollLeft / offsetWidth);

        if (currentItem.current === newActiveItem) {
            return null;
        }

        currentItem.current = newActiveItem;

        goTo(newActiveItem);
    };

    const scrollHandler = () => {
        if (currentItem.current !== activeItem) {
            return null;
        }

        debounce(verifyActiveItem(), 50);
    };
    
    return (
        <SnapSliderWrapper onScroll={scrollHandler} ref={sliderRef}>
            {children}
        </SnapSliderWrapper>
    );
}