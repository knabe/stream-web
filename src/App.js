import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

// Pages
import HomePage from './HomePage';
import TeamPage from './TeamPage';

// General/Home modules
import PreSaleBanner from './components/PreSaleBanner';
import Top from './components/Top';
import Footer from './components/Footer';

import './App.css';

// FB Pixel Implementation + pageView
ReactPixel.init('1076630789107052');
ReactPixel.pageView();

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <PreSaleBanner />
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
