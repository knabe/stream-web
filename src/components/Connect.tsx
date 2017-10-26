import * as React from 'react'

import './Connect.css'

class Connect extends React.Component {
  public render() {
    return (
      <section className="Connect container text-left">
        <h1>Connect with us</h1>

        <div className="row">
            <div className="Connect_info col-xs-12 col-sm-4">
                <b>Address</b><br/>
                <span>1234 Main Street<br/>San Francisco, CA 94016 USA</span>
            </div>
            <div className="Connect_info col-xs-12 col-sm-8">
                <b>Get in touch</b><br/>
                <span className="text_red">hello@streamtoken.net</span>
            </div>
        </div>

        <div className="Connect_links">
            <a href="">Whitepaper</a>
            <a href="">Github</a>
            <a href="">Chrome Extension</a>
        </div>
      </section>
    )
  }
}

export default Connect
