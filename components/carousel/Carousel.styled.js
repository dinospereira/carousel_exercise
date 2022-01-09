import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: ${({ width }) => width};
`;

export const CarouselItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
