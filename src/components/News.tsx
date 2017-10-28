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
            <a target="_blank" rel="noopener noreferrer"  href="https://www.coindesk.com/pantera-leads-5-million-investment-in-video-streaming-token-pre-sale/">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={CoinDesk} alt="CoinDesk" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.entrepreneur.com/article/302696">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={Entrepreneur} alt="Entrepreneur" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.forbes.com/sites/curtissilver/2017/09/06/stream-seeks-to-decentralize-livestreaming-payments-with-blockchain/#5534c11b39d4">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={Forbes} alt="Forbes" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.huffingtonpost.com/entry/no-more-starving-artists-blockchain-technology-helps_us_59b01f74e4b0bef3378cdce5">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={HuffPost} alt="HuffPost" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.crunchbase.com/organization/stream-token">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={CrunchBase} alt="CrunchBase" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://tech.co/blockchain-token-stream-advisor-round-2017-10">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={TechCo} alt="TechCo" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="http://techstartups.com/2017/10/26/stream-takes-lead-content-creation-breaks-free-shackles-big-players/">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={TechStartups} alt="TechStartups" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="http://www.banklesstimes.com/2017/10/26/blockchain-based-platform-stream-celebrating-5m-round/">
            <div className="News_image_cont">
                <img className="BlogPage_postAvatar" src={BanklessTimes} alt="BanklessTimes" />
            </div>
            </a>
        </div>

        <div className="BlogPage_post">
            <a target="_blank" rel="noopener noreferrer"  href="https://www.slashgear.com/stream-offers-cryptocurrency-option-to-livestreamers-abandoned-by-nintendo-10503451/">
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
