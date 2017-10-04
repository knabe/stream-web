import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <Router>
        // <Route exact path="/" component={App}/>
    // </Router>,
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
