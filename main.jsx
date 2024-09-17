import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';



// Your Auth0 domain and client ID
const root = createRoot(document.getElementById('root'));


ReactDOM.render(
    <Auth0Provider
        domain="tahirmansoor.us.auth0.com"
        clientId="ZH8n9jFuvkt2aTQi4YYQI358G9Pn06y8"
        authorizationParams={{
        redirect_uri: window.location.origin
     }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
