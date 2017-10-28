import * as React from 'react'

import * as iconFacebook from '../images/facebook.svg'
import * as iconInstagram from '../images/instagram.svg'
import * as logo from '../images/logo_simple.svg'
import * as iconTelegram from '../images/telegram.svg'
import * as iconTwitter from '../images/twitter.svg'

import './Footer.css'

class Footer extends React.Component {
  public render() {
    return (
      <section className="Footer col-xs-12">
      <div className="col-xs-12 col-sm-6 text-left">
        <img src={logo} alt="Stream" />
        2017 Stream - All Rights Reserved
      </div>
        <div className="col-xs-12 col-sm-4 text-right">
        <a href="mailto:info@streamtoken.net">
          info@streamtoken.net
        </a>
      </div>
      <div className="col-xs-12 col-sm-2 text-right">
        <a href="https://www.facebook.com/stream" target="_blank" rel="noopener noreferrer">
          <img src={iconFacebook} alt="" />
        </a>
        <a href="https://twitter.com/stream_token" target="_blank" rel="noopener noreferrer">
          <img src={iconTwitter} alt="" />
        </a>
        <a href="https://www.instagram.com/streamtoken" target="_blank" rel="noopener noreferrer">
          <img src={iconInstagram} alt="" />
        </a>
        <a href="https://t.me/streamtokencommunity" target="_blank" rel="noopener noreferrer">
          <img src={iconTelegram} alt="" />
        </a>
      </div>
      </section>
    )
  }
}

export default Footer
