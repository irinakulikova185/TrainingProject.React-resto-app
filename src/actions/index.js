const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
      
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    }
}

const addSameItem = (id) => {
    return {
        type: 'ADD_SAME_ITEM',
        payload: id

    }
}

const deleteSameItem = (id) => {
    return {
        type: 'DELETE_SAME_ITEM',
        payload: id

    }
}


 

export {menuLoaded, menuRequested, menuError, addedToCart, deleteFromCart, addSameItem, deleteSameItem}