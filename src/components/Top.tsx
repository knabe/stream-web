import * as React from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'

import * as logo from '../images/logo.svg'

import './Top.css'

export type MenuProps = {
  hasBg?: boolean,
  termsPrivacy?: boolean,
}

class Top extends React.Component<MenuProps> {
  public render() {
    const elClass = this.props.hasBg ? 'Top row solid_bg' : 'Top row'

    return (
      <div className={elClass}>
        <div className="container">
          <div className="Top_brand col-xs-12 col-md-4 text-left">
            <Link to={`${process.env.PUBLIC_URL}/`}><img src={logo} alt="" /></Link>
          </div>
            <div className="Top_menu col-xs-12 col-md-8 text-right">
              <ul>
                { !this.props.termsPrivacy ?
                <li>
                  <Scrollchor to="#tokensale" animate={{ duration: 600 }}>
                    Token Sale
                  </Scrollchor>
                </li>
                : null }
                { !this.props.termsPrivacy ?
                <li>
                  <Scrollchor to="#about" animate={{ duration: 600 }}>
                    About
                  </Scrollchor>
                </li>
                : null }
                { !this.props.termsPrivacy ?
                <li>
                  <Scrollchor to="#team" animate={{ duration: 600 }}>
                    Team
                  </Scrollchor>
                </li>
                : null }
                { this.props.termsPrivacy ?
                  <li><Link to={`/`}>Home</Link></li>
                : null }
                <li>
                  <a
                    href="https://blog.streamtoken.net/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Blog
                  </a>
                </li>

                <li className="btn_li">
                  <a
                    href="https://t.me/streamtokencommunity"
                    className="btn telegram"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join Telegram
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Top
