import React, { Component } from 'react';

import logo from '../images/logo_simple.svg';
import iconFacebook from '../images/facebook.svg';
import iconTwitter from '../images/twitter.svg';
import iconInstagram from '../images/instagram.svg';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <section className="Footer col-xs-12">
        <div className="col-xs-12 col-sm-6 text-left">
            <img src={logo} alt="Stream" />
            2017 Stream - All Rights Reserved
        </div>
          <div className="col-xs-12 col-sm-4 text-right">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="col-xs-12 col-sm-2 text-right">
            <a href="https://www.facebook.com/stream"><img src={iconFacebook} alt="" /></a>
            <a href=""><img src={iconTwitter} alt="" /></a>
            <a href=""><img src={iconInstagram} alt="" /></a>
        </div>
      </section>
    );
  }
}

export default Footer;
