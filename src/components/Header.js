import React, { Component } from 'react';

// import Top from './Top';
import Intro from './Intro';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <section className="Header row">
        <Intro />
      </section>
    );
  }
}

export default Header;
