import * as React from 'react'
// import { Link } from 'react-router-dom';

import './PreSaleBanner.css'

public trackPresaleInterest() {
  ReactPixel.track('Lead', {content_name: 'PresaleInterest'})
}

class PreSaleBanner extends React.Component {
  public render() {
    return (
      <div classNam e="PreSaleBanner">
        <span>PRESALE OPEN NOW</span>
        <a className="btn" href="https://streamtoken.typeform.com/to/QlQ6Gp" onClick={this.trackPresaleInterest} >EXPRESS INTEREST</a>
      </div>
    )
  }
}

export default PreSaleBanner
