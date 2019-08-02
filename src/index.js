import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Maps from './Maps';
import * as serviceWorker from './serviceWorker';


// "esri/basemaps",
// "esri/map",
// "dojo/domReady!"



ReactDOM.render(
    <Router>
        <Maps />
    </Router>
    , document.getElementById('root'))


    // ReactDOM.render(
    //     <div style={{ width: '100vw', height: '100vh' }}>
    //         <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
    //         <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
    //     </div>,
    //   document.getElementById('root')
    // );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Map } from '@esri/react-arcgis';

// ReactDOM.render(
//   <Map />,
//   document.getElementById('root')
// );