import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';



export default  function ProtectedRoute ({ component: Component, ...props })  {

    const authenticated = useSelector((state) => state.user.authenticated);
    
    return (
        <Route>
        {
        () => authenticated === true 
            ? props.children
            : <Redirect  to="/signin"/>
        }
        </Route>
    );
}
