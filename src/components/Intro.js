import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

import img from '../images/intro.png';

import Subscribe from './Subscribe';

import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro container">
        <div className="Intro_content col-xs-12 col-sm-6 text-left">
            <h1>An economic backbone <br/>for decentralized streaming.</h1>
            <Subscribe />
        </div>
        <div className="Intro_image col-xs-12 col-sm-6 text-right">
            <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Intro;
