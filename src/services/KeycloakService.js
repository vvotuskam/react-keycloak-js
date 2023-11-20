import Keycloak from "keycloak-js";

 const keycloak = new Keycloak("/keycloak.json");

const initKeycloak = (callback) => {

    keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256'
    })
        .then(authenticated => {
            callback()
        })
}

const doLogin = keycloak.login;
const doLogout = keycloak.logout;
const getToken = () => keycloak.token;
const isLoggedIn = () => !!keycloak.token;
const getKeycloak = () => keycloak
const doRegister = () => keycloak.login({action: 'register'})

const getUsername = () => keycloak.tokenParsed?.preferred_username;
const getPhone = () => keycloak.tokenParsed?.phone;

const KeycloakService = {
    initKeycloak,
    doLogin,
    doRegister,
    doLogout,
    isLoggedIn,
    getToken,
    getKeycloak,
    getUsername,
    getPhone
};

export default KeycloakService;
