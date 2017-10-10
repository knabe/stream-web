import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

import img from '../images/intro.png';

import './Intro.css';

class Intro extends Component {
  track() {
    ReactPixel.trackCustom('trackClick', 'NewsletterSignup')
  }
  render() {
    return (
      <div className="Intro container">
        <div className="Intro_content col-xs-12 col-sm-6 text-left">
            <h1>An economic backbone <br/>for decentralized streaming.</h1>

            <form
                action="//streamtoken.us16.list-manage.com/subscribe/post?u=49ecf8f7f89364a4855ae2e16&amp;id=526955045c"
                method="post"
                className="validate"
                target="_blank"
                noValidate>

                <label htmlFor="EMAIL">Join our newsletter for early access</label>

                <div className="Intro_form">
                    <input
                        ref={(input) => { this.email = input; }}
                        type="email"
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="Enter your email address" />

                    <input
                        type="submit"
                        defaultValue="Sign Up"
                        className="btn"
                        id="newsletter-btn"
                        onClick={this.track} />
                </div>
            </form>

        </div>
        <div className="Intro_image col-xs-12 col-sm-6 text-right">
            <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Intro;
