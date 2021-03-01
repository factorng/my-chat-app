import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ authenticated, component: Component, ...props }) => (
    <Route>
        {
            () => authenticated === true 
                ? <Redirect push to="/chat"/>
                : <Component {...props}/>
        }
    </Route>
);

export default PublicRoute;