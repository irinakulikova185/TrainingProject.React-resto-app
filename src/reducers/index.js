
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            }
        case 'MENU_ERROR': 
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true

            }
        case 'ITEM_ADD_TO_CART':
            const id = action.payload
            console.log(state.items)
            const itemInd = state.items.findIndex(item => item.id === +id)
            console.log(itemInd)
            if(itemInd >= 0) {
                const itemInState = state.items.find(item => item.id === +id)
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty,
                    price: (itemInState.price/(itemInState.qtty - 1)) * (itemInState.qtty),
                    
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    
                    ],
                    totalPrice: state.totalPrice + (itemInState.price/(itemInState.qtty-1))
                }

            }
            console.log(state.menu)
            console.log(id)
            const item = state.menu.find(item => item.id === +id)
            console.log(item)
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            }
            let total = state.totalPrice + newItem.price
            return {
                ...state,
                items: [...state.items, newItem],
                totalPrice: total
            }
            // const id = action.payload;
            
            // const itemInd = state.items.findIndex(item => item.id === id);
            // if (itemInd >= 0){
            //     const itemInState = state.items.find(item => item.id === id);
            //     const newItem = {
            //         ...itemInState,
            //         qtty: ++itemInState.qtty
            //     }
            //     return {
            //         ...state, 
            //         items: [
            //             ...state.items.slice(0, itemInd),
            //             newItem,
            //             ...state.items.slice(itemInd + 1)
            //         ],
            //         totalPrice: state.totalPrice + newItem.price
            //     }

            // } 
            // // товара раньше не было в корзине
            // const item = state.menu.find(item => item.id === id);
            // const newItem = {
            //     title: item.title,
            //     price: item.price,
            //     url: item.url,
            //     id: item.id,
            //     qtty: 1
            // };
            
            // return {
            //     ...state,
            //     items: [
            //         ...state.items,
            //         newItem
            //     ],
            //     totalPrice: state.totalPrice + newItem.price
            // };
            case 'ITEM_DELETE_FROM_CART': 
            const ind = action.payload
            const itemIndex = state.items.find(item => item.id === ind)
            const index = state.items.findIndex(item => item.id === ind)
            const newItems = [
                ...state.items.slice(0, index),
                ...state.items.slice(index+1)
            ]
            console.log(state.totalPrice)
            return {
                ...state,
                items: [...newItems],
                totalPrice: state.totalPrice - itemIndex.price 
            }
            case 'ADD_SAME_ITEM':
                const itemId = action.payload;
                const indexToAdd = state.items.findIndex(item => item.id === itemId)
                const itemToAdd = state.items.find(item => item.id === itemId)
    
                    const newItemToAdd = {
                        ...itemToAdd,
                        qtty: ++itemToAdd.qtty,
                        price: itemToAdd.price/(itemToAdd.qtty-1)*itemToAdd.qtty
                    }
                    return{
                        ...state,
                        items: [
                            ...state.items.slice(0, indexToAdd),
                            newItemToAdd,
                            ...state.items.slice(indexToAdd + 1)
                        ],
                        totalPrice: state.totalPrice + newItemToAdd.price - itemToAdd.price
                    } 
            
            
               
            case 'DELETE_SAME_ITEM':
                const itemIdtoDel = action.payload;
                const indexToDel = state.items.findIndex(item => item.id === itemIdtoDel)
                const itemToDel = state.items.find(item => item.id === itemIdtoDel)
                if(itemToDel.qtty > 1) {
                    const newItemToDel = {
                        ...itemToDel,
                        qtty: --itemToDel.qtty,
                        price: itemToDel.price/(itemToDel.qtty+1)*itemToDel.qtty
                    }
                return{
               ...state,
               items: [
                   ...state.items.slice(0, indexToDel),
                   newItemToDel,
                   ...state.items.slice(indexToDel + 1)
               ],
               totalPrice: state.totalPrice + newItemToDel.price - itemToDel.price
                } 
                } else {
                    return state
                }
                

        default:
            return state    
    }
}

export default reducer