import React from 'react';
import {connect} from 'react-redux'
import './cart-table.scss';
import {deleteFromCart, addSameItem, deleteSameItem} from '../../actions'

const CartTable = ({items, deleteFromCart, addSameItem, deleteSameItem}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return (
                            <div className="cart__item" key={id}>
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-qtty_control">
                                    <button onClick={() => addSameItem(id)}><img src="img/Plus.svg" alt="plus"/></button>
                                    <div className="cart__item-qtty">
                                    {qtty}</div>
                                    <button onClick={() => deleteSameItem(id)}><img src="img/Minus.png" alt="minus"/></button>
                                </div>
                               
                                    
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__close" onClick={() => deleteFromCart(id)}>&times;</div>
                            </div>
                    )
                    })
                }

               
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCart, 
    addSameItem,
    deleteSameItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);