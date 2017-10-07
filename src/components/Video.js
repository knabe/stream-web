import React, { Component } from 'react';
import { DefaultPlayer as Movie } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import video from '../images/DKVideo.mp4';

import './Video.css';

// <video controls>
//     <source src={video} type="video/mp4"/>
//     Your browser is not supported. Please use latest version of Chrome or Firefox and try again.
// </video>

class Video extends Component {
  render() {
    var width_class = this.props.fullWidth ? ' full_width' : '';

    return (
      <section className={'Video col-xs-12' + width_class}>
        <Movie controls={['PlayPause', 'Seek', 'Volume', 'Fullscreen']}>
            <source src={video} type="video/mp4" />
        </Movie>
      </section>
    );
  }
}

export default Video;
