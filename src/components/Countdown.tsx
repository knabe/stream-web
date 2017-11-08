import * as React from 'react'
import Countdown from 'react-countdown-now'
import * as moment from 'moment'

import './Countdown.css'

class Countdown extends React.Component {
  public render() {
  return (
    <section className="Countdown container text-center">
      <h2>Remaining time until token sale</h2>
    </section>
  )
  }
}

export default Countdown
