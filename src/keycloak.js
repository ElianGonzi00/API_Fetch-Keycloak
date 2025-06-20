import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: '',
    realm: '',
    clientId: ''
};

const initKeycloak = () => {
    const keycloak = new Keycloak(keycloakConfig);

    return keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false,
        pkceMethod: 'S256'
    });
};

export default initKeycloak;