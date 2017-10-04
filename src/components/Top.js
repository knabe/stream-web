import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from '../HomePage';
import WhatWhyPage from '../WhatWhyPage';
import TeamPage from '../TeamPage';
import RoadmapPage from '../RoadmapPage';
import FAQPage from '../FAQPage';
import BlogPage from '../BlogPage';

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
                <img src={logo} alt="" />
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
