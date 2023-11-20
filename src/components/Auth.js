import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import KeycloakService from "../services/KeycloakService";
import keycloakService from "../services/KeycloakService";

const Auth = () => {

    const navigate = useNavigate()

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
            <button style={{
                backgroundColor: "green",
                padding: 10,
                color: "white",
                border: "2px solid black"
            }} onClick={() => KeycloakService.doLogin()}>
                Login
            </button>
            <button style={{
                backgroundColor: "cadetblue",
                padding: 10,
                color: "white",
                border: "2px solid black"
            }} onClick={() => {
                keycloakService.doRegister()
            }}>
                Register
            </button>
        </div>
    );
};

export default Auth;