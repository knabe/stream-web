import React, { Component } from 'react';

// Import team images
import Ben from '../images/ben.png';
import Greg from '../images/greg.png';
import Simar from '../images/simar.png';
import Chris from '../images/chris.png';
import Ava from '../images/ava.png';
import Travis from '../images/travis.png';

import './Team.css';

class Team extends Component {
  render() {
    return (
      <section className="Team container">
        <h1>Meet the Team</h1>

        <div className="members row">
            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Ben} alt="" />
                <p><b>Ben Yu</b></p>
                <p>CEO</p>
            </div>

            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Greg} alt="" />
                <p><b>Greg Kufera</b></p>
                <p>CTO</p>
            </div>

            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Simar} alt="" />
                <p><b>Simar Mangat</b></p>
                <p>VP Eng.</p>
            </div>

            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Chris} alt="" />
                <p><b>Chris Barett</b></p>
                <p>CMO</p>
            </div>

            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Ava} alt="" />
                <p><b>Ava Huang</b></p>
                <p>Designer</p>
            </div>

            <div className="member col-xs-12 col-sm-6 col-md-4 text-left">
                <img src={Travis} alt="" />
                <p><b>Travis Herrick</b></p>
                <p>Engineer</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Team;
