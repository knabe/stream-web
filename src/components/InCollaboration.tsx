import * as React from 'react'

// Import team images
import * as Livepeer from '../images/Livepeer.png'

import './InCollaboration.css'

const InCollaboration = () => (
  <section className="InCollaboration grey_bg">
    <div className="container">
      <h1 className="text-center">In collaboration With</h1>

      <div className="text-center">
        <img src={Livepeer} alt="" />
      </div>
    </div>
  </section>
)

export default InCollaboration
