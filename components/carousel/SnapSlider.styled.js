import styled from "styled-components";

export const SnapSliderWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        scroll-snap-align: center;
        flex: 0 0 auto;
    }
`;
