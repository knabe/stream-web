import * as React from 'react'

// Import team images
import * as Ben from '../images/ben.png'
import * as Chris from '../images/chris.png'
import * as Greg from '../images/greg.png'
import * as Simar from '../images/simar.png'

import './Team.css'

class Team extends React.Component {
  public render() {
    return (
      <section className="Team container">
      <h1>Meet the Team</h1>

      <div className="members">
        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Ben} alt="" />
          <p><b>Ben Yu: CEO</b></p>
          <p>Previously: Harvard, Thiel Fellowship, Sprayable.</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Greg} alt="" />
          <p><b>Greg Kufera: CTO</b></p>
          <p>Previously: Princeton, Kufera Creative, Expo, Intertrust.</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Simar} alt="" />
          <p><b>Simar Mangat: COO</b></p>
          <p>Previously: Stanford CS, Pavlov, Stoodle, Pear Ventures.</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Chris} alt="" />
          <p><b>Chris Barrett: CMO</b></p>
          <p>Previously: PRServe, TheRapTest, co-author: Direct Your Own Life.</p>
        </div>
      </div>
      </section>
    )
  }
}

export default Team
