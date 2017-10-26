import * as React from 'react'

// Home modules
import Header from './components/Header'
import News from './components/News'
import Section from './components/Section'
import SubscribeFooter from './components/SubscribeFooter'
import Team2 from './components/Team2'
import Terms2 from './components/Terms2'
import Terms3 from './components/Terms3'
import Timeline from './components/Timeline'
import Video from './components/Video'

import * as CRXImg from './images/crx.png'
import * as SolutionImg from './images/solution.svg'
import * as StoryImg from './images/story.svg'

// import './HomePage.css';

const HomePage = () => (
    <div className="Home_page">
        <Header />

        <div id="about" className="container text-left">
            <div className="row">
                <div className="Section col-xs-12 col-md-4 col-md-offset-2">
                    <h1>Content creation is broken.</h1>

                    <p>Across every form of online video today, content creators are getting an unfair deal. Generating popular and meaningful content is not translating to more lucrative or even sustainable careers for content creators.</p>
                </div>

                <div className="Section col-xs-12 col-md-4">
                    <p>Video platforms such as YouTube, Twitch, and Facebook take up to a 50% cut of a content creator's earnings. To make matters worse, creators have to pay out of pocket for expenses before platforms take their huge cut.  Creators can be left penniless while the big platforms rake in the profits.</p>

                    <p>Creators are locked into these video platforms. If they leave, they lose their fan base and income. Changing platforms puts a creator at risk of losing absolutely everything they’ve spent years building.  As a result, creators have no leverage and are forced to accept the terms imposed by platforms.</p>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="Section col-xs-12 col-md-4 col-md-offset-2">
                    <p>We want to live in a world where technology not only eliminates the middlemen who suck up so much of the money in media, but also incentivizes the creation and celebration of content that represents who we really are. All of us, without exception.</p>
                </div>

                <div className="Section col-xs-12 col-md-4">
                    <p>The best thing about the internet is that it makes it easier to see each other. When we can see each other, we can <b>learn from each other.</b> When we learn from each other, we relate. We believe that this relationship is the first step towards <b>living our dreams, uncompromised.</b></p>

                    <p>Because, fundamentally, we rise together. Which is to say, at the end of the day, when creators win, we win. <b>Everybody wins.</b></p>
                </div>
            </div>
        </div>

        <Video />

        <div className="container">
            <Section name="Introducing">
                <div>
                    <h1>Introducing STREAM</h1>
                    <p>STREAM uses blockchain technology that supports the undercurrent economy. This means:</p>
                    <ol>
                        <li>We work in the background of the internet to link content + audiences across platforms.</li>
                        <li>We make sure creators of free content get paid without having to sell out.</li>
                    </ol>
                </div>
            </Section>

            <Section name="HowDo" image={SolutionImg} imagePosition="left">
                <div>
                    <h1>How do we do this?</h1>
                    <ol>
                        <li>Our system is decentralized. Rather than build a platform for people to join, we’re building a system to meet people where they’re at.</li>
                        <li>The more you do, the more we share. We issue STREAM Tokens based on the total amount of views on STREAM. Creators with the most views get the most tokens.</li>
                    </ol>
                </div>
            </Section>
        </div>

        <div className="grey_bg">
            <div className="container">
                <Section name="Tokens" image={CRXImg} imageShadow="true">
                    <div>
                        <h1>STREAM Tokens</h1>
                        <p>The Stream Token is a blockchain-based cryptocurrency that lets content creators get paid with absolutely no middleman taking a cut. Every Stream Token a creator earns, they keep.</p>
                        <p>Ads are optional. Our Chrome Extension plugs in to the platforms you\'re already using. For anyone who likes to watch stuff, there are two major upsides:</p>
                        <p>1. You watch what you want. Nobody makes that decision for you. <br />2. Your voice matters. We reward the creators you watch.</p>
                    </div>
                </Section>
            </div>
        </div>

        <Timeline />
        <Terms2 />
        <Terms3 />

        <div className="container">
            <Section name="Story" image={StoryImg}>
                <div>
                    <h1>Our Story</h1>
                    <p>After creating content and receiving millions of views, we found ourselves without control over our videos, facing countless restrictions, and in debt. Demonetization is impacting many creators and compensation for streaming videos is on the decline. We knew there had to better way, but there was no real alternative to existing corporate-owned streaming services. </p>
                    <p><b>STREAM is our way of empowering content creators and the streaming community, bringing freedom, control, and choice to the content you created.</b></p>
                </div>
            </Section>
        </div>

        <div className="container">
            <Team2 />
        </div>

        <News />

        <SubscribeFooter />
    </div>
)

export default HomePage

// <div className="container">
// </div>
