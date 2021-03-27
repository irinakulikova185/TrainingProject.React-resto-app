import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux'
import store from './store'
import ErrorBoundry from './components/error-boundry/error-boundry'
import RestoServiceContex from './components/resto-service-context/resto-service-context'
import RestoService from './services/resto-service'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.scss';


const restoService = new RestoService()
console.log(store)
console.log(restoService)
ReactDOM.render(
  
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContex.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContex.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

