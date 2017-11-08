import * as React from 'react'

import '../BlogPage.css'
import './News.css'

import * as BanklessTimes from '../images/media/BanklessTimes.png'
import * as Blank from '../images/media/Blank.png'
import * as CoinDesk from '../images/media/CoinDesk.png'
import * as CrunchBase from '../images/media/CrunchBase.png'
import * as Entrepreneur from '../images/media/Entrepreneur.png'
import * as Forbes from '../images/media/Forbes.png'
import * as HuffPost from '../images/media/HuffPost.png'
import * as SlashGear from '../images/media/SlashGear.png'
import * as TechCo from '../images/media/TechCo.png'
import * as TechStartups from '../images/media/TechStartups.png'

class News extends React.Component {
  public render() {
    return (
        <div className="BlogPage News">
        <h1 className="text-center">Latest News</h1>
        <div className="BlogPage_posts container">
        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.forbes.com/sites/jonathanponciano/2017/10/30/stream-younow-cryptocurrencies-challenge-ad-dominated-video-content-markets/" title="Stream, YouNow: Can Cryptocurrencies Challenge Ad-Dominated Video-Content Market?">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={Forbes} alt="Forbes" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.huffingtonpost.com/entry/59f7890fe4b094db8e76f7b9" title="Stream Token: A New Cryptocurrency To Help Video Content Creators Earn A Fair Living">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={HuffPost} alt="HuffPost" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.coindesk.com/pantera-leads-5-million-investment-in-video-streaming-token-pre-sale/" title="Pantera Leads $5 Million Investment in Video Streaming Token Pre-Sale">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={CoinDesk} alt="CoinDesk" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.entrepreneur.com/article/302696" title="10 Companies That Are Getting Creative With Cryptocurrency">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={Entrepreneur} alt="Entrepreneur" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.forbes.com/sites/curtissilver/2017/09/06/stream-seeks-to-decentralize-livestreaming-payments-with-blockchain/#5534c11b39d4" title="Stream Seeks To Use Blockchain Tech To Decentralize Livestreaming Payments">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={Forbes} alt="Forbes" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.huffingtonpost.com/entry/no-more-starving-artists-blockchain-technology-helps_us_59b01f74e4b0bef3378cdce5" title="No More Starving Artists: Blockchain Technology Helps Video Content Creators Earn More">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={HuffPost} alt="HuffPost" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.crunchbase.com/organization/stream-token" title="crunchbase: Stream Token profile">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={CrunchBase} alt="CrunchBase" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://tech.co/blockchain-token-stream-advisor-round-2017-10" title="Blockchain Company Stream Closes $5 Million Advisor Token Pre-Sale Round">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={TechCo} alt="TechCo" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="http://techstartups.com/2017/10/26/stream-takes-lead-content-creation-breaks-free-shackles-big-players/" title="Stream Takes the Lead; Content Creation Breaks Free From the Shackles of Big Players.">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={TechStartups} alt="TechStartups" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="http://www.banklesstimes.com/2017/10/26/blockchain-based-platform-stream-celebrating-5m-round/" title="Blockchain-based platform Stream celebrating $5M round">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={BanklessTimes} alt="BanklessTimes" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.slashgear.com/stream-offers-cryptocurrency-option-to-livestreamers-abandoned-by-nintendo-10503451/" title="Stream offers cryptocurrency option to livestreamers abandoned by Nintendo">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={SlashGear} alt="SlashGear" />
            </div>
            </a>
        </div>
        </div>
        </div>
    )
  }
}

export default News
