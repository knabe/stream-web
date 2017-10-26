import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import DefaultImg from '../images/performers.svg';

import './Section.css';

const Section = (props) => (
    <section className={`Section col-xs-12 ${props.name}`}>
        {props.imagePosition === 'left' ?
            <div className="col-xs-12 col-sm-6">
                <img src={props.image || DefaultImg} alt="" />
            </div> : null
        }
        <div className="col-xs-12 col-sm-6 text-left">
            {ReactHtmlParser(props.content)}
        </div>
        {(props.imagePosition === 'right' || !props.imagePosition) ?
            <div className="col-xs-12 col-sm-6">
                <img className={props.imageShadow ? 'shadow' : ''} src={props.image || DefaultImg} alt="" />
            </div> : null
        }
    </section>
);

export default Section;
