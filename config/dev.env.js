'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_URL_EXT: '"https://{host}:{port}"',
    BASE_URL_INT: '""',
    OKTA_ISSUER: '"https://dev-83030770.okta.com/oauth2/default"',
    // datagora non prod
    OKTA_CLIENT_ID: '"0oa578effvNUuIRIn5d7"',
    OKTA_REDIRECT_URL: '"http://localhost:8080/implicit/callback"',
});
