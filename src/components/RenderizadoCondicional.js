import React, { Component } from "react";

//deberian estar en componentes diferentes Login / Logout, quedaria mas mejor
function Login(props){
    return (
            <h3>Login</h3>
    )
};


function Logout(props){
    return (
            <h3>Logout</h3>
    )
};


function RenderizadoCondicional(props) {
    const isLog = props.Login
    if (isLog) {
    return (
            <Login />
    )    
    }
    return (
        <Logout/>
    )
}


export default RenderizadoCondicional;