import React from 'react';
import {useNavigate} from "react-router-dom";
import KeycloakService from "../services/KeycloakService";
import RenderOnAuthenticated from "../helpers/RenderOnAuthenticated";

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div style={{display: 'flex'}}>
            <div onClick={() => navigate('/')} style={{margin: 10}}>Home</div>
            <div onClick={() => navigate('/auth')} style={{margin: 10}}>Auth</div>
            <RenderOnAuthenticated children={
                <div
                    onClick={() => KeycloakService.doLogout({redirectUri: 'http://localhost:3000/auth'})}
                    style={{margin: 10, backgroundColor: 'palevioletred', padding: 5, color: 'white', borderRadius: 7}}
                >
                    Log out
                </div>
            }/>
        </div>
    );
};

export default Nav;