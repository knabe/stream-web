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
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
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
