import React from 'react'
import { Redirect, Route } from "react-router-dom";

const AuthAdminRoute= ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => 
            (
                localStorage.getItem('StoreToken') ?
                     <Redirect to='/adminbooks' />
                    :<Component {...props}/>
            )
         }/>
    );
}
export default AuthAdminRoute