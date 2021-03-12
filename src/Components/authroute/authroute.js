import React from 'react'
import { Redirect, Route } from "react-router-dom";

const AuthRoute= ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => 
            (
                localStorage.getItem('bookStoreToken') ?
                     <Redirect to='/dashboard' />
                    :<Component {...props}/>
            )
         }/>
    );
}
export default AuthRoute