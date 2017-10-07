import React, { Component } from 'react';

// Import team images
import Ben from '../images/ben.png';
import Greg from '../images/greg.jpg';
import Simar from '../images/simar.jpg';
import Chris from '../images/chris.jpg';
// import Ava from '../images/ava.jpg';
// import Travis from '../images/travis.png';
// import Vicki from '../images/vicki.jpg';
// import Eric from '../images/eric.png';

import './Team.css';

class Team extends Component {
  render() {
    return (
      <section className="Team container">
        <h1>Meet the Team</h1>

        <div className="members row">
            <div className="member col-xs-12 col-sm-4 col-md-3 text-left">
                <img src={Ben} alt="" />
                <p><b>Ben Yu</b></p>
                <p>CEO</p>
            </div>

            <div className="member col-xs-12 col-sm-4 col-md-3 text-left">
                <img src={Greg} alt="" />
                <p><b>Greg Kufera</b></p>
                <p>CTO</p>
            </div>

            <div className="member col-xs-12 col-sm-4 col-md-3 text-left">
                <img src={Simar} alt="" />
                <p><b>Simar Mangat</b></p>
                <p>COO</p>
            </div>

            <div className="member col-xs-12 col-sm-4 col-md-3 text-left">
                <img src={Chris} alt="" />
                <p><b>Chris Barett</b></p>
                <p>CMO</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Team;
