import React from 'react'
import { Redirect, Route } from "react-router-dom";

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => 
            (
                localStorage.getItem('StoreToken') ?
                    <Component {...props} {...rest} />
                    : <Redirect to='/loginadmin' />
            )
         }/>
    );
}
export default PrivateAdminRoute