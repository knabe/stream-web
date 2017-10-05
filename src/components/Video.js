import React, { Component } from 'react';

import video from '../images/DKVideo.mp4';

import './Video.css';

class Video extends Component {
  render() {
    var width_class = this.props.fullWidth ? ' full_width' : '';

    return (
      <section className={'Video col-xs-12' + width_class}>
        <video controls>
            <source src={video} type="video/mp4"/>
            Your browser is not supported. Please use latest version of Chrome or Firefox and try again.
        </video>
      </section>
    );
  }
}

export default Video;
