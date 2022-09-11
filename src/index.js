import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer} >
        <App />
    </StateProvider>

);

