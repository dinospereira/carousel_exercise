import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    position: relative;
    max-width: 1440px;
    height: 100%;
    width: 100%;
    margin: 0 auto;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 10%;
        left: -100vw;
        right: -100vw;
        background-color: #F6DDD1;
    }
`;

export const InformationSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 0;
`;

export const CarouselSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
`;