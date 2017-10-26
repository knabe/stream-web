import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

// Pages
import HomePage from './HomePage';
import TeamPage from './TeamPage';

// General/Home modules
import PreSaleBanner from './components/PreSaleBanner';
import Top from './components/Top';
import Footer from './components/Footer';

import './App.css';

// FB Pixel implementation + pageView
ReactPixel.init('1076630789107052');
ReactPixel.pageView();

// Google Analytics implementation
ReactGA.initialize('UA-000000-01');
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  logPageView() {
    ReactPixel.pageView();
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
        <Router onUpdate={this.logPageView}>
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
