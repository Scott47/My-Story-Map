import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Maps from './Maps';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';






ReactDOM.render(
    <Router>
        <Maps />
    </Router>
    , document.getElementById('root'))



serviceWorker.unregister();



