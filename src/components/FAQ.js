import React, { Component } from 'react';

import './FAQ.css';

class FAQ extends Component {
  toggle(e) {
      if (e.target.nextSibling.className.indexOf('active_q') !== -1) {
          e.target.nextSibling.className = '';
      } else {
          e.target.nextSibling.className = 'active_q';
      }
  }

  render() {
    return (
      <section className="FAQ col-xs-12 text-left">
        <h1 className="text-center">Frequently Asked Questions</h1>

        <hr/>

        <h2>General inquiries</h2>
        <p>New around here? Start with the basics</p>

        <ul className="FAQ_questions">
            <li className="FAQ_question">
                <h3 onClick={this.toggle}>What is Stream?</h3>
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
            </li>

            <li className="FAQ_question">
                <h3 onClick={this.toggle}>Is Stream available on browsers other than Chrome?</h3>
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
            </li>

            <li className="FAQ_question">
                <h3 onClick={this.toggle}>How do I know Stream is installed?</h3>
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
            </li>

            <li className="FAQ_question">
                <h3 onClick={this.toggle}>How do I know if I have the latest version?</h3>
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
            </li>

            <li className="FAQ_question">
                <h3 onClick={this.toggle}>What happens if I am on a computer without Stream installed?</h3>
                <p>Stream is a new decentralized blockchain-based token that allows streamers to easily and anonymously accept payments from their audience members anywhere in the world, with extremely low transaction fees and no platform lock-in.</p>
            </li>
        </ul>
      </section>
    );
  }
}

export default FAQ;
