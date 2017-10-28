import * as React from 'react'

import * as DefaultImg from '../images/performers.svg'

import './Section.css'

const Section = (props: {
  name?: string, imagePosition?: string, image?: string, children?: React.ReactNode, imageShadow?: string,
}) => (
  <section className={`Section col-xs-12 ${props.name}`}>
    {props.imagePosition === 'left' ?
      <div className="col-xs-12 col-sm-6">
        <img src={props.image || DefaultImg} alt="" />
      </div> : null
    }
    <div className="col-xs-12 col-sm-6 text-left">
      {props.children}
    </div>
    {(props.imagePosition === 'right' || !props.imagePosition) ?
      <div className="col-xs-12 col-sm-6">
        <img className={props.imageShadow ? 'shadow' : ''} src={props.image || DefaultImg} alt="" />
      </div> : null
    }
  </section>
)

export default Section
