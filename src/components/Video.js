import React, { Component } from 'react';

import img from '../images/video.jpg';

import './Video.css';

class Video extends Component {
  render() {
    var width_class = this.props.fullWidth ? ' full_width' : '';

    return (
      <section className={'Video col-xs-12' + width_class}>
        <img src={img} alt="" />
      </section>
    );
  }
}

export default Video;
