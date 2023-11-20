import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KeycloakService from "./services/KeycloakService";

const renderApp = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );

    KeycloakService.initKeycloak(() => {})
}

renderApp()

// KeycloakService.initKeycloak(renderApp)

