import * as React from 'react'
import * as ReactPixel from 'react-facebook-pixel'
// import { Link } from 'react-router-dom';

import './PreSaleBanner.css'


class PreSaleBanner extends React.Component {

  public trackPresaleInterest() {
    ReactPixel.track('Lead', {content_name: 'PresaleInterest'})
  }

  public render() {
    return (
      <div className="PreSaleBanner">
        <span>PRESALE OPEN NOW</span>
        <a className="btn" href="https://streamtoken.typeform.com/to/QlQ6Gp" onClick={this.trackPresaleInterest} >EXPRESS INTEREST</a>
      </div>
    )
  }
}

export default PreSaleBanner
