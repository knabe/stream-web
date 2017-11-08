import * as React from 'react'

// Import team images
import * as Joey from '../images/Joey.png'
import * as Paul from '../images/Paul.png'
import * as Saureen from '../images/Saureen.png'
import * as David from '../images/David.png'

import './Advisors.css'

const Advisors = () => (
  <section className="Advisors grey_bg">
    <div className="container">
      <h1 className="text-center">Advisors</h1>

      <div className="members">
        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Joey} alt="" />
          <p><b>Joey Krug</b></p>
          <p>Co-chief Investment Officer @Pantera, Cofounder @Augur</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Paul} alt="" />
          <p><b>Paul Veradittakit</b></p>
          <p>Partner @Pantera Capital</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={Saureen} alt="" />
          <p><b>Saureen Shash</b></p>
          <p>10th engineer @YouTube, Founder/CTO @Instawork</p>
        </div>

        <div className="member col-xs-12 col-sm-6 col-md-3 text-left">
          <img src={David} alt="" />
          <p><b>David Johnston</b></p>
          <p>Chairman of Board @Factom, Founder @BitAngels</p>
        </div>
      </div>
    </div>
  </section>
)

export default Advisors
