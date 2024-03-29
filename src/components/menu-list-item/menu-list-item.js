import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom'

const MenuListItem = ({menuItem, onAddtoCart}) => {
    
    const {title, price, category, url} = menuItem
    return (
        <>
            <li className="menu__item">
                <Link to={`/${menuItem.id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        onAddtoCart()
                    }}
                    className="menu__btn">Add to cart
                </button>
                <div className={`menu__item__icon ${category}`}></div>
                </Link>
            </li>
        </>
    )
}

export default MenuListItem;