import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactPixel from 'react-facebook-pixel'
import * as ReactGA from 'react-ga'
import { Route, Router, Switch  } from 'react-router-dom'

// Pages
import HomePage from './HomePage'
import TeamPage from './TeamPage'
import Privacy from './Privacy'
import Terms from './Terms'

// General/Home modules
import Footer from './components/Footer'
import PreSaleBanner from './components/PreSaleBanner'
import Top from './components/Top'

import './App.css'

// FB Pixel implementation + pageView
ReactPixel.init('2357465807812225')
ReactPixel.pageView()

// Google Analytics implementation
ReactGA.initialize('UA-105975605-1')
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

let pathname = history.location.pathname

export const isTermsPrivacy = () => {
  const is = pathname === '/privacy' || pathname === '/terms' ? true : false
  return is
}
export const termsPrivacy = isTermsPrivacy()

class App extends React.Component {

  public render() {
    return (
      <Router history={history}>
        <div className="App">
          <PreSaleBanner />
          <Top hasBg={true} termsPrivacy={termsPrivacy}/>

          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
            <Route path={`${process.env.PUBLIC_URL}/team`} component={TeamPage} />
            <Route path={`${process.env.PUBLIC_URL}/privacy`} component={Privacy} />
            <Route path={`${process.env.PUBLIC_URL}/terms`} component={Terms} />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
