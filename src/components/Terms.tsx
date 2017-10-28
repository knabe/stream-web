import * as React from 'react'

import './Terms.css'

import * as PieChart from '../images/PieChart.png'

const Terms = () => (
    <section className="Terms grey_bg">
        <div className="container">
            <h1 className="text-center">Token Sale Terms</h1>

            <div className="col-xs-12 col-md-6">
                <img src={PieChart} alt="" />
            </div>

            <div className="col-xs-12 col-md-6 text-left">

                <p>Crowdsale is capped at <b>$33 million</b> USD</p>
                <p>Total token supply is approximately <b>12 billion</b></p>
                <p>Token distribution:</p>
                <ul>
                    <li>33% Token Sale</li>
                    <li>25% Customer acquisition</li>
                    <li>25% Company development</li>
                    <li>10% Stream founders</li>
                    <li>5% Stream Employees</li>
                    <li>2% Stream Advisors</li>
                </ul>
                <p>ERC20 Token, directly purchasable with ether</p>
                <p>The value of STC is fixed at $0.01 USD until 11/16, and then it is fixed to [$0.01 USD * [ETH / USD exchange rate on 11/16]] ETH</p>
            </div>
        </div>
    </section>
)

export default Terms
