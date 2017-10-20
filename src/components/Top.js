import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../images/logo.svg'

import './Top.css';

class Top extends Component {
  render() {
    var elClass = this.props.hasBg ? 'Top row solid_bg' : 'Top row';


    return (
      <div className={elClass}>
        <div className="container">
            <div className="Top_brand col-xs-12 col-md-4 text-left">
                <Link to={`${process.env.PUBLIC_URL}/`}><img src={logo} alt="" /></Link>
            </div>
                <div className="Top_menu col-xs-12 col-md-8 text-right">
                    <ul>
                        <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/team`}>
                                Team
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://blog.streamtoken.net/">
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
    );
  }
}

export default Top;
