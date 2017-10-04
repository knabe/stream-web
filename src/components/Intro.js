import React, { Component } from 'react';

import img from '../images/intro.png';

import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro container">
        <div className="Intro_content col-xs-12 col-sm-6 text-left">
            <h1>An economic backbone <br/>for decentralized streaming</h1>
            <input type="email" id="subscribe" placeholder="Join the newsletter" />
            <button>Subscribe</button>
        </div>
        <div className="Intro_image col-xs-12 col-sm-6 text-right">
            <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Intro;
