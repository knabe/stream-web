import React, { Component } from 'react';

import CRX from '../images/crx.png';

import './How.css';

class How extends Component {
  render() {
    return (
      <section className="How">
        <h1>How to do stuff with us right</h1>

        <div className="container">
            <div className="How_steps row">

                <div className="step">
                    <img src="" alt="" />
                    <h3>Nulla leo</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
                </div>

                <div className="step">
                    <img src="" alt="" />
                    <h3>Nulla leo</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
                </div>

                <div className="step">
                    <img src="" alt="" />
                    <h3>Nulla leo</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
                </div>
            </div>

            <div className="How_buy row">
                <div className="col-xs-12 col-sm-6 text-left">
                    <h2>Buy STC from ETH from USD</h2>
                    <p>Stream is new decentralized blockchain-based token that allows streamers to easily and anonymously accept their payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
                </div>
                <div className="col-xs-12 col-sm-6 text-center">
                    <img src={CRX} alt="" />
                </div>
            </div>

            <div className="How_monetize row">
                <div className="col-xs-12 col-sm-6 text-center">
                    <img src={CRX} alt="" />
                </div>
                <div className="col-xs-12 col-sm-6 text-left">
                    <h2>How to monetize your content</h2>
                    <p>Stream also incentivizes new and existing creators to make great content by automatically distributing newly minted tokens to creators based on their contributions to the ecosystem.</p>
                </div>
            </div>

        </div>
      </section>
    );
  }
}

export default How;
