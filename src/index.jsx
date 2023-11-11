import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './app/App';
import {StoreContextProvider} from "./data/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContextProvider>
);

