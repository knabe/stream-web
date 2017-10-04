import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

import './Top.css';

class Top extends Component {
  constructor(props) {
      super(props);

      this.state = {
          hasBg: false
      }
  }

  render() {
    var hasBg = this.props.hasBg;


        var elClass = hasBg ? 'Top row solid_bg' : 'Top row';


    return (
      <div className={elClass}>
        <div className="container">
            <div className="Top_brand col-xs-12 col-sm-4 text-left">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <span>Stream</span>
            </div>
                <div className="Top_menu col-xs-12 col-sm-8 text-right">
                    <ul>
                        <li><Link to="/whatwhy">What & Why</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/roadmap">Roadmap</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li className="btn_li"><a href="" className="btn">Download CRX</a></li>
                    </ul>
                </div>
        </div>
      </div>
    );
  }
}

export default Top;
