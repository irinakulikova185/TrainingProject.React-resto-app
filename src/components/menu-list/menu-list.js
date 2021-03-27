import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc/with-resto-service'
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions'
import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested()
        const {RestoService} = this.props
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .then(res => console.log(res))
        .catch(error => this.props.menuError())
    }
    
    render() {
        const {menuItems, loading, error, addedToCart} = this.props
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Error/>
        }

        const items = menuItems.map(menuItem => <MenuListItem onAddtoCart={() => addedToCart(menuItem.id)} key={menuItem.id} menuItem={menuItem}/>)
        return <View items={items}/>
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => dispatch(
//             menuLoaded(newMenu)
//         )
//     }
// }

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

const View = (props) => {
    const {items} = props
    return (
            
        <ul className="menu__list">
            
               {items} 
            
            
        </ul>
    )
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));