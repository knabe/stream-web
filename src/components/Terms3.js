import React from 'react';

import './Terms.css';

import BPK from '../images/BPK.jpg';
import Fenbushi from '../images/fenbushi_logo.png';
import Zhen from '../images/zhen.png';
import Pantera from '../images/pantera-white.png';
import FBG from '../images/FBG.jpg';
import CoinFund from '../images/coinfund-logo-padded.png';
import InBlockchain from '../images/in_blockchain.png';

const Terms3 = () => (
    <section className="Terms Terms3">
        <div className="container">
            <h1 className="text-center">Notable backers</h1>

            <div>
                <img src={BPK} alt="" />
                <img src={Fenbushi} alt="" />
                <img src={Zhen} alt="" />
                <img src={Pantera} alt="" />
                <img src={FBG} alt="" />
                <img src={CoinFund} alt="" />
                <img src={InBlockchain} alt="" />
            </div>
        </div>
    </section>
);

export default Terms3;
