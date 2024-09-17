import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';

// Your Auth0 domain and client ID
const root = createRoot(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="tahirmansoor.us.auth0.com"
    clientId="ZH8n9jFuvkt2aTQi4YYQI358G9Pn06y8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <AppProvider>            
            <App />     
        </AppProvider>
  
    </Auth0Provider>
);
