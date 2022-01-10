import React from 'react';
import { CarouselContainer} from './Carousel.styled';
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