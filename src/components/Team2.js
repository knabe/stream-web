import React, { Component } from 'react';

// Import team images
import Ben from '../images/ben.png';
import Greg from '../images/greg.png';
import Simar from '../images/simar.png';
import Chris from '../images/chris.png';

import './Team2.css';

class Team2 extends Component {
  render() {
    return (
      <section id="team" className="Team2 container">
        <h1>Meet the Team</h1>

        <div className="members">
            <div className="member col-xs-12 text-left">
                <div className="col-xs-12 col-md-4 col-md-offset-2 text-left">
                    <img src={Ben} alt="" />
                    <p>Ben Yu <br />CEO</p>
                    <p>Previously: Harvard, Thiel Fellowship, Sprayable.</p>
                </div>

                <div className="col-xs-12 col-md-6 text-left bio">
                    <p>Attended Harvard University, before dropping out to accept an inaugural Thiel Fellowship, a $100,000 grant given to the top 20 entrepreneurs under the age of 20 by the billionaire founder of PayPal and first outside investor in Facebook Peter Thiel.</p>

                    <p>Other recipients of the Thiel Fellowship include Vitalik Buterin, the creator of Ethereum, and Joey Krug, the creator of Augur. After receiving the Thiel Fellowship, Ben went on to create Sprayable, the creator of the world's first topical energy and sleep sprays. With Sprayable a successful company valued in the 8 figures, Ben began exploring the cryptocurrency world in more depth, having been exposed to the industry in large part by being colleagues with Vitalik as a Thiel Fellow while he was developing Ethereum. </p>

                    <p>Ben became interested in the streaming industry when he became an internet celebrity, receiving over 50 million views on Facebook videos about his life, past business successes, and success with cryptocurrency investments. He received $0 for all those 50 million+ views, and knew that clearly something was broken in the video streaming industry. Thus, STREAM was born.</p>
                </div>
            </div>

                <hr className="col-xs-12 col-md-10 col-md-offset-2" />

            <div className="member col-xs-12 text-left">
                <div className="col-xs-12 col-md-4 col-md-offset-2 text-left">
                    <img src={Greg} alt="" />
                    <p>Greg Kufera <br />CTO</p>
                    <p>Previously: Princeton, Kufera Creative, Expo, Intertrust.</p>
                </div>

                <div className="col-xs-12 col-md-6 text-left bio">
                    <p>Graduated from Princeton University in 2015 in mathematics with a concentration in computational geometry advised by Robert Tarjan. His thesis on creating a dynamic algorithm for the longest increasing subsequence <a href="http://dataspace.princeton.edu/jspui/handle/88435/dsp01w6634593x">can be found here</a>. </p>

                    <p>During his time at Princeton, Greg worked in experimental physics, and traveled to Italy to work on discovering dark matter at the LNGS particle physics laboratory. Having programmed since age 7, upon graduation, Greg founded Kufera Creative, a coding consultancy and research company. Through Kufera Creative, Greg has worked with a variety of technologies and clients in London, Rome, San Francisco, Palo Alto, Los Angeles, and New York City, including Intertrust, whiteCryption, Expo, Bompas and Parr, and Teads. Kufera Creative specializes in projects focusing on digital video, generative art, and mobile development. As a consequence of his work, Greg instantly saw the potential behind STREAM, and was thrilled to join STREAM as CTO to build the infrastructure for the next generation of online media.</p>
                </div>
            </div>

                <hr className="col-xs-12 col-md-10 col-md-offset-2" />

            <div className="member col-xs-12 text-left">
                <div className="col-xs-12 col-md-4 col-md-offset-2 text-left">
                    <img src={Simar} alt="" />
                    <p>Simar Mangat <br />COO</p>
                    <p>Previously: Stanford CS, Pavlov, Stoodle, Pear Ventures.</p>
                </div>

                <div className="col-xs-12 col-md-6 text-left bio">
                    <p>Graduated from Stanford in Computer Science with a specialization in Biocomputation and Artificial Intelligence. Simar has loved working on startups ever since he was a kid - from casually selling paperclip bow and arrows to more officially founding three startups while in high school and college. In particular, he cofounded a non-profit edtech startup called Stoodle that provided free collaborative classrooms for students to tutor one another. </p>

                    <p>This became a Top 14 app used by teens in 2014 (Business Insider) and was recognized by both the White House and Department of Education. Simar additionally loves building strong teams at communities. While at Stanford, he served as Freshmen and Sophomore class president, head TA-ed the inaugural VR class for the GSB with Prof Jennifer Aaker, began Stanford Kindness day, section led as a TA for introductory CS courses, RA-ed in the freshmen only Larkin dorm, and served (pun intended) as Tennis Instructor for a summer at Sierra Camp. On the technical end, Simar brings deep domain expertise in systems, artificial intelligence, and biocomputation.</p>

                    <p>He, along with two friends, published one of the first iOS applications to do real-time video classification.  In addition, while at Pavlov as their first engineer, Simar built a comprehensive pipeline for CV deep learning and created over half a million dollars in value for a client company with the trained image classifiers. He is so stoked to bring his technical and operational knowledge to build the future of streaming.</p>
                </div>
            </div>

                <hr className="col-xs-12 col-md-10 col-md-offset-2" />

            <div className="member col-xs-12 text-left">
                <div className="col-xs-12 col-md-4 col-md-offset-2 text-left">
                    <img src={Chris} alt="" />
                    <p>Chris Barrett <br />CMO</p>
                    <p>Previously: PRServe, TheRapTest, co-author: Direct Your Own Life.</p>
                </div>

                <div className="col-xs-12 col-md-6 text-left bio">
                    <p>Has over 15 years of public relations and media experience. In 2011, he founded PRServe, a success-based PR agency for innovative startups. Since then, he's helped launch the successful media trajectory of over 600 leading startups, including Breather, KISSMetrics, Treehouse, and Insta360. As one of the country's premier crowdfunding PR experts, he has helped raise over $15 million in sales for crowdfunding campaigns. </p>

                    <p>In 2001, Chris was a national financial responsibility spokesperson for FirstUSA. He is featured in the Sundance and SXSW award-winning documentary films The Corporation and Maxed Out and has appeared in People Magazine and The New York Times. </p>

                    <p>In 2010 and 2011, Chris worked as New Media Producer for journalist Roger Friedman's Showbiz411.com. Together, Chris and Roger produced a series of intimate interviews with stars such as James Franco, Quincy Jones, and Mark Ruffalo. In 2008, Chris co-authored the book Direct Your Own Life with Napoleon Dynamite actor Efren Ramirez. </p>

                    <p>In early 2007, Chris became one of the first YouTube content creators to be invited to monetize his account. With over 10 million views on YouTube for his original content, Chris' goal is to make the world more fair and profitable for independent content creators, outside of corporate giants such as Amazon and YouTube. STREAM is his way of doing that.</p>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Team2;
