import * as React from 'react'

import './Terms.css'

import * as BPK from '../images/BPK.jpg'
import * as CoinFund from '../images/coinfund-logo-padded.png'
import * as FBG from '../images/FBG.jpg'
import * as Fenbushi from '../images/fenbushi_logo.png'
import * as InBlockchain from '../images/in_blockchain.png'
import * as Pantera from '../images/pantera-white.png'
import * as Zhen from '../images/zhen.png'

const Terms3 = () => (
    <section className="Terms Terms3">
        <div className="container">
            <h1 className="text-center">Notable backers</h1>

            <div>
                <img src={Pantera} alt="" />
                <img src={Fenbushi} alt="" />
                <img src={CoinFund} alt="" />
                <img src={BPK} alt="" />
                <img src={Zhen} alt="" />
                <img src={FBG} alt="" />
                <img src={InBlockchain} alt="" />
            </div>
        </div>
    </section>
)

export default Terms3
