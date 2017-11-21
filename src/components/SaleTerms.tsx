import * as React from 'react'

import './SaleTerms.css'

import * as PieChart from '../images/PieChart.png'

const SaleTerms = () => (
  <section className="SaleTerms">
    <div className="container">
      <h1 className="text-center">Token Sale Terms</h1>

      <div className="col-xs-12 col-md-6 pie">
        <img src={PieChart} alt="" />
      </div>

      <div className="col-xs-12 col-md-6 text-left">

        <p>Public Token Sale is capped at <b>$33 million USD</b></p>
        <p>Total token supply is approximately <b>12 billion</b></p>
        <p>Token distribution:</p>
        <ul>
          <li>33% Token Sale</li>
          <li>25% Customer acquisition</li>
          <li>25% Company development</li>
          <li>17% Team</li>
        </ul>
        <p>ERC20 Token, directly purchasable with ether</p>
        <p>The pre-Token Sale value of STC is fixed at $0.01 USD.</p>
      </div>
    </div>
  </section>
)

export default SaleTerms
