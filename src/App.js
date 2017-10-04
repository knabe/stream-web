import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import HomePage from './HomePage';
import WhatWhyPage from './WhatWhyPage';
import TeamPage from './TeamPage';
import RoadmapPage from './RoadmapPage';
import FAQPage from './FAQPage';
import BlogPage from './BlogPage';

// General/Home modules
import Top from './components/Top';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Top hasBg={true} />

                <Route exact path="/" component={HomePage} />
                <Route path="/whatwhy" component={WhatWhyPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/roadmap" component={RoadmapPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/blog" component={BlogPage} />

                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
