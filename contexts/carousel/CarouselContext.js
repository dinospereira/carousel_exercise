import React from 'react';

export default React.createContext({
    goNext: () => null,
    goPrev: () => null,
    goTo: () => null,
    setNewActiveItem: () => null,
    setItemsLength: () => null,
    activeItem: 0,
    itemsLength: 0,
    direction: null,
});