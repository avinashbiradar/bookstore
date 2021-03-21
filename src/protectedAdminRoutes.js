import React from 'react';
import {Route, Redirect} from "react-router-dom";
let authenticated = false;

const  isAuthenticated = () => {
    if(localStorage.getItem("StoreToken") === null){
      authenticated = false;
    }
    else{
      authenticated = true;
    }
  return authenticated;
}

export default function ProtectedRoutes({component: Component, ...rest}){
    return (
        <Route {...rest} render = {(props) => {
            if(isAuthenticated()){
                return <Component {...props}/>
            }
            else{
                return <Redirect to = {
                {    pathname: "/loginadmin",
                    state: {
                        from: props.location,
                        
                    }}
                } />
            }
            
        }} />
        
    )
}
