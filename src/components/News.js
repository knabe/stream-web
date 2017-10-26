import React, { Component } from 'react';

import '../BlogPage.css';
import './News.css';

import Blank from '../images/Blank.png';
import Forbes from '../images/Forbes.png';
import Entrepreneur from '../images/Entrepreneur.png';
import HuffPost from '../images/HuffPost.png';
import SlashGear from '../images/SlashGear.png';

class News extends Component {
  render() {
    return (
      <div className="BlogPage News">
        <h1 className="text-center">Latest News</h1>
        <div className="BlogPage_posts container">
            <div className="BlogPage_post">
                <a href="https://www.forbes.com/sites/curtissilver/2017/09/06/stream-seeks-to-decentralize-livestreaming-payments-with-blockchain/#5534c11b39d4">
                    <img className="BlogPage_postAvatar" src={Forbes} alt="" />
                    <b>Forbes</b>
                </a>
                <span className="">STREAM Seeks To Use Blockchain Tech To Decentralize Livestreaming Payments</span>
            </div>

            <div className="BlogPage_post">
                <a href="https://www.huffingtonpost.com/entry/no-more-starving-artists-blockchain-technology-helps_us_59b01f74e4b0bef3378cdce5">
                    <img className="BlogPage_postAvatar" src={HuffPost} alt="" />
                    <b>Huffington Post</b>
                </a>
                <span className="">No More Starving Artists: Blockchain Technology Helps Video Content Creators Earn More</span>
            </div>

            <div className="BlogPage_post">
                <a href="https://www.entrepreneur.com/article/302696">
                    <img className="BlogPage_postAvatar" src={Entrepreneur} alt="" />
                    <b>Entrepreneur</b>
                </a>
                <span className="">10 Companies That Are Getting Creative With Cryptocurrency</span>
            </div>

            <div className="BlogPage_post">
                <a href="https://www.slashgear.com/stream-offers-cryptocurrency-option-to-livestreamers-abandoned-by-nintendo-10503451/">
                    <img className="BlogPage_postAvatar" src={SlashGear} alt="" />
                    <b>Slash Gear</b>
                </a>
                <span className="">STREAM offers cryptocurrency option to livestreamers abandoned by Nintendo</span>
            </div>

            <div className="BlogPage_post">
                <a href="http://www.banklesstimes.com/2017/09/06/stream-a-new-alternative-for-content-creators/">
                    <img className="BlogPage_postAvatar" src={Blank} alt="" />
                    <b>Bankless Times</b>
                </a>
                <span className="">STREAM a new alternative for content creators</span>
            </div>

            <div className="BlogPage_post">
                <a href="http://techstartups.com/2017/09/15/stream-better-future-streaming-monetization/">
                    <img className="BlogPage_postAvatar" src={Blank} alt="" />
                    <b>TechStartUps.com</b>
                </a>
                <span className="">STREAM: The better future of streaming monetization</span>
            </div>
        </div>
      </div>
    );
  }
}

export default News;
