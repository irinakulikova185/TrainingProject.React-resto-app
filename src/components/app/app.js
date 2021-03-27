import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom'
import ItemPage from '../pages/itemPage'


import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService)
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/:number' component={ItemPage}/>
            {/* <Route exact component={MainPage}/> */}
            </Switch>
            
        </div>
    )
}

export default App;