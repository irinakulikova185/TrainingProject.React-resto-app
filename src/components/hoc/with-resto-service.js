import React from 'react';
import RestoServiceContex from '../resto-service-context/resto-service-context';


const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContex.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
                
            </RestoServiceContex.Consumer>
        )
    }
};

export default WithRestoService;