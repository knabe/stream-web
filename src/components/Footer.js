import React, { Component } from 'react';

import logo from '../images/logo.png';
import iconFacebook from '../images/icon-facebook.png';
import iconTwitter from '../images/icon-twitter.png';
import iconInstagram from '../images/icon-instagram.png';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <section className="Footer col-xs-12">
        <div className="col-xs-12 col-sm-6 text-left">
            <img src={logo} alt="Stream" />
            2017 Stream - All Rights Reserved
        </div>
          <div className="col-xs-12 col-sm-4 col-lg-5 text-right">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="col-xs-12 col-sm-2 col-lg-1 text-right">
            <a href=""><img src={iconFacebook} alt="" /></a>
            <a href=""><img src={iconTwitter} alt="" /></a>
            <a href=""><img src={iconInstagram} alt="" /></a>
        </div>
      </section>
    );
  }
}

export default Footer;
