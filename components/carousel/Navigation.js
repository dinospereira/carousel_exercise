import React from 'react';
import { ArrowRight, ArrowLeft, NavigationContainer, Indicator } from "./Navigation.styled";
import CarouselContext from '../../contexts/carousel/CarouselContext';
import { ArrowIcon } from '../../icons/Arrow';

export const Navigation = () => {
    const { goNext, goPrev, activeItem, itemsLength } = React.useContext(CarouselContext);

    const nextHandler = React.useCallback(() => (activeItem) => {
        goNext(activeItem + 1);
    }, [goNext]);

    const previousHandler = React.useCallback(() => (activeItem) => {
        goPrev(activeItem - 1);
    }, [goPrev]);

    return (
        <NavigationContainer>
            <ArrowLeft onClick={previousHandler(activeItem)} activeItem={activeItem}>
                <ArrowIcon />
                <Indicator>{`${(activeItem + 1) - 1}/${itemsLength}`}</Indicator>
            </ArrowLeft>
            <ArrowRight onClick={nextHandler(activeItem)} activeItem={activeItem} itemsLength={itemsLength}>
                <Indicator>{`${(activeItem + 1) + 1}/${itemsLength}`}</Indicator>
                <ArrowIcon />
            </ArrowRight>
        </NavigationContainer>
    )
}