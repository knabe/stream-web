import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

class Subscribe extends Component {
    trackSubscribe() {
        ReactPixel.track('track', 'Lead');
        ReactPixel.trackCustom('trackClick', 'NewsletterSignup');
    }
    render() {
        return (
            <div id="mc_embed_signup">
                <form
                    action="https://streamtoken.us17.list-manage.com/subscribe/post?u=b09345b7e4f1c96cf9b418ead&amp;id=5ce52fd85b"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    rel="noopener noreferrer"
                    novalidate>

                    <div id="mc_embed_signup_scroll">
                        <label htmlFor="mce-EMAIL">
                            Join our newsletter for early access
                        </label>

                        <input
                            ref={(input) => { this.email = input; }}
                            type="email"
                            name="EMAIL"
                            className="email"
                            id="mce-EMAIL"
                            placeholder="Enter your email address"
                            required />

                        <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true">
                            <input
                                type="text"
                                name="b_b09345b7e4f1c96cf9b418ead_5ce52fd85b"
                                tabindex="-1"
                                defaultValue="" />
                        </div>

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
        );
    }
}

export default Subscribe;
