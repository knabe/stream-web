import * as React from 'react'

import './Roadmap.css'

class Roadmap extends React.Component {
  public render() {
    return (
      <section className="Roadmap col-xs-12">
      <h1>Roadmap of Features</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies tortor vulputate nisi auctor aliquet.</p>

      <hr/>

      <div className="month">
        <div className="month_name">October 2017</div>

        <div className="feature_box left">
          <p><b>Release and Initial Sale</b></p>
          <p>We intend to release our initial Product and sell 33% of the underlying tokens, which will function on day 1 within the proof-of-concept protocol, and be hard forked into the implementation of our Vision once it is completed.</p>
        </div>

        <div className="feature_box right">
          <p><b>Iteration and improvement: 2018 and beyond</b></p>
          <p>We will certainly need to iterate and improve the protocol in order to truly settle on an optimal solution, especially in order to keep up with the pace of technology / quantum / fully-homomorphic encryption etc.</p>
        </div>
      </div>

      <div className="month">
        <div className="month_name">September 2017</div>

        <div className="feature_box left">
          <p><b>Release and Initial Sale</b></p>
          <p>We intend to release our initial Product and sell 33% of the underlying tokens, which will function on day 1 within the proof-of-concept protocol, and be hard forked into the implementation of our Vision once it is completed.</p>
        </div>
      </div>
      </section>
    )
  }
}

export default Roadmap
