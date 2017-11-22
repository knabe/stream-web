import * as React from 'react'

import './Timeline.css'

// import * as TimelineImg from '../images/timeline.svg';

const Timeline = () => (
  <section id="tokensale" className="Timeline">
    <div className="container">
      <h1 className="text-center">Token Sale Timeline</h1>

      <div className="line row">
        <hr className="col-xs-8 col-xs-offset-2" style={{ padding: 0 }}/>

        <div className="col-xs-4 line_segment">
          Presale
          <br /><b>OPEN NOW</b>
        </div>

        <div className="col-xs-4 line_segment">
          Chrome Extension Release
          <br /><b>Dec 8th</b>
        </div>

        <div className="col-xs-4 line_segment">
          Public Token Sale
        </div>

        <div className="col-xs-12">
          <a className="btn" href="https://streamtoken.typeform.com/to/QlQ6Gp">EXPRESS INTEREST</a>
        </div>
      </div>
    </div>
  </section>
)

export default Timeline

// <img src={TimelineImg} alt=""/>
