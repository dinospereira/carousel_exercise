import styled from "styled-components";

export const LocationList = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
    color: #333;
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    margin: 0 0 4rem 0;
`;

export const LocationListItem = styled.li`
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;

    &:not(:last-child) {
        border-right: 1px solid #bbb;
    }
`;