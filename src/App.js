import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

// Pages
import HomePage from './HomePage';
import TeamPage from './TeamPage';
// import WhatWhyPage from './WhatWhyPage';
// import RoadmapPage from './RoadmapPage';
// import FAQPage from './FAQPage';
// import BlogPage from './BlogPage';

// General/Home modules
import Top from './components/Top';
import Footer from './components/Footer';

import './App.css';

// FB Pixel Implementation + pageView
ReactPixel.init('2357465807812225');
ReactPixel.pageView();

class App extends Component {
  render() {

    return (
        <Router>
            <div className="App">
                <Top hasBg={true} />

                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                    <Route path={`${process.env.PUBLIC_URL}/team`} component={TeamPage} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
