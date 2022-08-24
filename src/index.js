import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import ReactBreakpoints from 'react-breakpoints/lib/ReactBreakpoints.js';

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactBreakpoints breakpoints={breakpoints}>
    <StateProvider initialState={initialState} reducer={reducer} >
        <App />
    </StateProvider>
    </ReactBreakpoints>

    
);

