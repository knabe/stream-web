import React, { Component } from 'react';

import img from '../images/performers.png';

import './Performers.css';

class Performers extends Component {
  render() {
    return (
      <section className="Performers col-xs-12">
        <div className="col-xs-12 col-sm-6 text-left">
            <h1>
                Transparent. Efficient. Open.<br/>
                <span className="text_red">Performers first.</span>
            </h1>
            <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
        </div>
        <div className="col-xs-12 col-sm-6">
            <img src={img} alt="" />
        </div>
      </section>
    );
  }
}

export default Performers;
