import * as React from 'react'
import { DefaultPlayer as Movie } from 'react-html5video'
import 'react-html5video/dist/styles.css'

import * as video from '../images/DKVideo.mp4'

import './Video.css'

export type VideoProps = {
  fullWidth?: boolean,
}

class Video extends React.Component<VideoProps> {
  public render() {
    const widthClass = this.props.fullWidth ? ' full_width' : ''

    return (
      <section className={'Video col-xs-12 ' + widthClass}>
        <Movie controls={['PlayPause', 'Seek', 'Volume', 'Fullscreen']}>
          <source src={video} type="video/mp4" />
        </Movie>
      </section>
    )
  }
}

export default Video
