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
            <h1>Excellent work <br/>should get fairly rewarded.</h1>
            <p>Stream incentivizes the production of great content by automatically distributing tokens to creators based on their contributions to the internet video ecosystem. </p>
        </div>
      </section>
    );
  }
}

export default Solution;
