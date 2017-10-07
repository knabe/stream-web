import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg'

import './Top.css';

class Top extends Component {
  render() {
    var elClass = this.props.hasBg ? 'Top row solid_bg' : 'Top row';


    return (
      <div className={elClass}>
        <div className="container">
            <div className="Top_brand col-xs-12 col-md-4 text-left">
                <Link to="/stream-2/"><img src={logo} alt="" /></Link>
            </div>
                <div className="Top_menu col-xs-12 col-md-8 text-right">
                    <ul>
                        <li><Link to="/stream-2/team">Team</Link></li>
                        <li><a href="https://blog.streamtoken.net/">Blog</a></li>
                        <li className="btn_li"><a href="http://discord.streamtoken.net/" className="btn discord">Join Discord</a></li>
                    </ul>
                </div>
        </div>
      </div>
    );
  }
}

export default Top;
