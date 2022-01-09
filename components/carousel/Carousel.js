import React from 'react';
import { CarouselProvider } from '../../contexts/carousel/CarouselProvider';
import { CarouselContainer, ArrowLeft, ArrowRight } from './Carousel.styled';
import { Navigation } from './Navigation';
import { SnapSlider } from './SnapSlider';

export const Carousel = ({ children, width, ...rest }) => {
    return (
        <CarouselContainer width={width} {...rest}>
            <SnapSlider>
            {children}
            </SnapSlider>
        </CarouselContainer>
    );
};

Carousel.defaultProps = {
    width: '100%',
}