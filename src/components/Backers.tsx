import * as React from 'react'

import './Backers.css'

import * as BPK from '../images/BPK.png'
import * as CoinFund from '../images/coinfund-logo-padded.png'
import * as FBG from '../images/FBG.png'
import * as Fenbushi from '../images/fenbushi_logo.png'
import * as InBlockchain from '../images/in_blockchain.png'
import * as Pantera from '../images/pantera-white.png'
import * as Zhen from '../images/zhen.png'

const Backers = () => (
  <section className="Terms Backers grey_bg">
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

export default Backers
