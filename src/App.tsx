import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactPixel from 'react-facebook-pixel'
import * as ReactGA from 'react-ga'
import { Route, Router, Switch  } from 'react-router-dom'

// Pages
import HomePage from './HomePage'
import TeamPage from './TeamPage'

// General/Home modules
import Footer from './components/Footer'
import PreSaleBanner from './components/PreSaleBanner'
import Top from './components/Top'

import './App.css'

// FB Pixel implementation + pageView
ReactPixel.init('1076630789107052')
ReactPixel.pageView()

// Google Analytics implementation
ReactGA.initialize('UA-000000-01')
ReactGA.set({ page: window.location.pathname + window.location.search })
ReactGA.pageview(window.location.pathname + window.location.search)

export const logPageView = () => {
  ReactPixel.pageView()
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export const history = createBrowserHistory()
history.listen((location, action) => {
  logPageView()
})

class App extends React.Component {

  public render() {
    return (
      <Router history={history}>
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
    )
  }
}

export default App
