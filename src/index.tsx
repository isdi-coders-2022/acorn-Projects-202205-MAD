import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { MatchContextProvider } from './contexts/match.provider';
import { WeatherContextProvider } from './contexts/weather.provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="acorn-isdi.eu.auth0.com"
            clientId="WkimkESzOTGKCBuBVUkGgyRcO3ZjTmmF"
            redirectUri={window.location.origin}
        >
            <MatchContextProvider>
                <WeatherContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </WeatherContextProvider>
            </MatchContextProvider>
        </Auth0Provider>
    </React.StrictMode>
);
