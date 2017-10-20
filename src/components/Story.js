import React, { Component } from 'react';

import story from '../images/story.svg';

import './Story.css';

class Story extends Component {
  render() {
    return (
      <section className="Story row">
        <div className="container">
            <div className="Story_content col-xs-12 col-sm-6 text-left">
                <h1>Our Story</h1>
                <p>After creating content and receiving millions of views, we found ourselves without control over our videos, facing countless restrictions, and in debt. Demonetization is impacting many creators and compensation for streaming videos is on the decline. We knew there had to better way, but there was no real alternative to existing corporate-owned streaming services. </p>
                <p><b>Stream is our way of empowering content creators and the streaming community, bringing freedom, control, and choice to the content you created.</b></p>
            </div>
            <div className="Story_image col-xs-12 col-sm-6 text-left">
                <img src={story} alt="" />
            </div>
        </div>
      </section>
    );
  }
}

export default Story;
