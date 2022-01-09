import CarouselContext from './CarouselContext';
import PropTypes from 'prop-types';
import React from 'react';

export const CarouselProvider = ({ children, startItem }) => {
    const [itemsLength, setItemsLength] = React.useState(0);
    const [activeItem, setActiveItem] = React.useState(startItem);
    const [direction, setDirection] = React.useState();

    const setNewActiveItem = React.useCallback((newActiveItem) => {
        setActiveItem(newActiveItem);
    }, []);

    const goTo = React.useCallback((index) => {
        const isInvalidIndex =
            typeof index !== 'number' ||
            index < 0 ||
            index > itemsLength - 1;

        if (isInvalidIndex) {
            return null;
        }

        setActiveItem(index);
    }, [itemsLength]);

    const goNext = React.useCallback(() => {
        let newActiveItem = activeItem + 1;

        setDirection('next');
        goTo(newActiveItem);
    }, [activeItem, goTo]);

    const goPrev = React.useCallback(() => {
        let newActiveItem = activeItem - 1;

        setDirection('prev');
        goTo(newActiveItem);
    }, [activeItem, goTo]); 

    React.useEffect(() => {
        setActiveItem(startItem);
    }, [startItem]);

    const value = React.useMemo(() => ({
        itemsLength,
        activeItem,
        direction,
        goTo,
        goPrev,
        goNext,
        setNewActiveItem,
        setItemsLength
    }), [activeItem, direction, goNext, goPrev, goTo, itemsLength, setNewActiveItem]);

    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
} 

CarouselProvider.defaultProps = {
    startItem: 0,
};

CarouselProvider.propTypes = {
    children: PropTypes.node.isRequired,
    startItem: PropTypes.number,
};
