import * as React from 'react'
import * as ReactPixel from 'react-facebook-pixel'

import './SubscribeFooter.css'

class SubscribeFooter extends React.Component {
  private email: any

  public trackSubscribe() {
    ReactPixel.track('track', 'Lead')
    ReactPixel.trackCustom('trackClick', 'NewsletterSignup')
  }

  public render() {
    return (
      <div id="mc_embed_signup" className="SubscribeFooter">
        <h2>Get Involved</h2>
        <div className="container">
          <form action="https://streamtoken.us16.list-manage.com/subscribe/post?u=49ecf8f7f89364a4855ae2e16&amp;id=526955045c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">
                Pre-register to get access to the STREAM Token Sale the moment it opens.
              </label>

              <div style={{ position: 'absolute', left: -5000 + 'px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_49ecf8f7f89364a4855ae2e16_526955045c"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>

              <input
                ref={(input) => { this.email = input }}
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="Join the newsletter"
                required />

              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="btn"
                onClick={this.trackSubscribe} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SubscribeFooter
