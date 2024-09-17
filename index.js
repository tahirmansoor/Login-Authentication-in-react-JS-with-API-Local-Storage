import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';


// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //    domain="tahirmansoor.us.auth0.com"
  //   clientId="ZH8n9jFuvkt2aTQi4YYQI358G9Pn06y8" 
  //   redirectUri={window.location.origin}
  // >
    <App />
  // </Auth0Provider>,
);
