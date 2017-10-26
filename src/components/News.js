import React, { Component } from 'react';

import '../BlogPage.css';
import './News.css';

import Blank from '../images/media/Blank.png';
import TechCo from '../images/media/TechCo.png';
import TechStartups from '../images/media/TechStartups.png';
import CoinDesk from '../images/media/CoinDesk.png';
import BanklessTimes from '../images/media/BanklessTimes.png';
import Forbes from '../images/media/Forbes.png';
import HuffPost from '../images/media/HuffPost.png';
import Entrepreneur from '../images/media/Entrepreneur.png';
import SlashGear from '../images/media/SlashGear.png';
import CrunchBase from '../images/media/CrunchBase.png';

class News extends Component {
  render() {
    return (
      <div className="BlogPage News">
        <h1 className="text-center">Latest News</h1>
        <div className="BlogPage_posts container">
            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.coindesk.com/pantera-leads-5-million-investment-in-video-streaming-token-pre-sale/">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={CoinDesk} alt="" />
                    </div>
                    <b>CoinDesk</b>
                </a>
                <span className="">Pantera Leads $5 Million Investment in Video Streaming Token Pre-Sale</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.entrepreneur.com/article/302696">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={Entrepreneur} alt="" />
                    </div>
                    <b>Entrepreneur</b>
                </a>
                <span className="">10 Companies That Are Getting Creative With Cryptocurrency</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.forbes.com/sites/curtissilver/2017/09/06/stream-seeks-to-decentralize-livestreaming-payments-with-blockchain/#5534c11b39d4">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={Forbes} alt="" />
                    </div>
                    <b>Forbes</b>
                </a>
                <span className="">STREAM Seeks To Use Blockchain Tech To Decentralize Livestreaming Payments</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.huffingtonpost.com/entry/no-more-starving-artists-blockchain-technology-helps_us_59b01f74e4b0bef3378cdce5">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={HuffPost} alt="" />
                    </div>
                    <b>Huffington Post</b>
                </a>
                <span className="">No More Starving Artists: Blockchain Technology Helps Video Content Creators Earn More</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.crunchbase.com/organization/stream-token">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={CrunchBase} alt="" />
                    </div>
                    <b>CrunchBase</b>
                </a>
                <span className="">Stream Token</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://tech.co/blockchain-token-stream-advisor-round-2017-10">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={TechCo} alt="" />
                    </div>
                    <b>TechCo</b>
                </a>
                <span className="">Blockchain Company STREAM Closes $5 Million Advisor Token Pre-Sale Round</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="http://techstartups.com/2017/10/26/stream-takes-lead-content-creation-breaks-free-shackles-big-players/">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={TechStartups} alt="" />
                    </div>
                    <b>TechStartups.com</b>
                </a>
                <span className="">STREAM Takes the Lead; Content Creation Breaks Free From the Shackles of Big Players</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="http://www.banklesstimes.com/2017/10/26/blockchain-based-platform-stream-celebrating-5m-round/">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={BanklessTimes} alt="" />
                    </div>
                    <b>Bankless Times</b>
                </a>
                <span className="">Blockchain-based platform STREAM celebrating $5M round</span>
            </div>

            <div className="BlogPage_post">
                <a target="_blank" rel="noopener noreferrer"  href="https://www.slashgear.com/stream-offers-cryptocurrency-option-to-livestreamers-abandoned-by-nintendo-10503451/">
                    <div className="News_image_cont">
                        <img className="BlogPage_postAvatar" src={SlashGear} alt="" />
                    </div>
                    <b>Slash Gear</b>
                </a>
                <span className="">STREAM offers cryptocurrency option to livestreamers abandoned by Nintendo</span>
            </div>
        </div>
      </div>
    );
  }
}

export default News;
