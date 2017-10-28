import * as React from 'react'

// import Top from './Top';
import Intro from './Intro'

import './Header.css'

class Header extends React.Component {
  public render() {
    return (
      <section className="Header row">
      <Intro />
      </section>
    )
  }
}

export default Header
