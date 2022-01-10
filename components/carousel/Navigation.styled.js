import styled from "styled-components";

export const Indicator = styled.div`
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    background: white;
    border-radius: 2rem;
    font-size: 0.7rem;
`;

export const ArrowLeft = styled.button`
    display: flex;
    padding-left: 0.5rem;
    place-items: center;
    background: none;
    cursor: pointer;
    ${({ activeItem }) => activeItem <= 0 &&
    `
        pointer-events: none;
    `};

    ${Indicator} {
        margin-left: 1rem;
        visibility: ${({ activeItem }) => activeItem <= 0 ? 'hidden' : 'visible'};
    }
`;

export const ArrowRight = styled.button`
    display: flex;
    padding-right: 0.5rem;
    place-items: center;
    background: none;
    cursor: pointer;
    ${({ activeItem, itemsLength }) => activeItem >= itemsLength - 1 &&
    `
        pointer-events: none;
    `};

    ${Indicator} {
        margin-right: 1rem;
        visibility: ${({ activeItem, itemsLength }) => activeItem >= itemsLength - 1 ? 'hidden' : 'visible'};
    }

    svg {
        transform: rotate(180deg);
    }
`;

export const NavigationContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    top: calc(50% - 2.5rem);
`;