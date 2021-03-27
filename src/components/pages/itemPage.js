import React, { Component } from 'react'
import {connect} from 'react-redux'
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions'
import WithRestoService from '../hoc/with-resto-service'
import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './itemPage.css'

class ItemPage extends Component {
 
    componentDidMount() {
        
        if( this.props.menuItems.length === 0){
           this.props.menuRequested()
        }
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError())
            
    }
 

    render() {
        const {menuItems, loading, error, addedToCart} = this.props
        if(loading) {
            return (
                <div className = "item_page">
                <Spinner/>
            </div>
            )
        }
        if(error) {
            return (
                <div className = "item_page">
                <Error/>
            </div>
            )
        }
        const item = menuItems.find(el => +el.id === +this.props.match.params.number)
        const{title, url, category, price} = item;
      
        return (
            <div className ="item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button 
                        className="menu__btn"
                        onClick={() => {
                            addedToCart(this.props.match.params.number)
                        }
                           }>Add to cart</button>
                    <span className = {`menu__category__icon ${category}`}></span> 
                </div>
            </div>
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage))