import React, { Component } from 'react';

import img from '../images/solution.svg';

import './Solution.css';

class Solution extends Component {
  render() {
    return (
      <section className="Solution col-xs-12">
        <div className="col-xs-12 col-sm-6">
            <img src={img} alt="" />
        </div>
        <div className="col-xs-12 col-sm-6 text-left">
            <h1>Solution for streamers.</h1>
            <p>Stream also incentivizes new and existing creators to make great content by automatically distributing newly minted tokens to creators based on their contributions to the ecosystem.</p>
            <button>Learn More</button>
        </div>
      </section>
    );
  }
}

export default Solution;
