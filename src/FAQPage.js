import React, { Component } from 'react';

// Home modules
import FAQ from './components/FAQ';

// import './FAQPage.css';

class FAQPage extends Component {
    render() {
        return (
            <div className="FAQ_page">
                <div className="container">
                    <FAQ />
                </div>
            </div>
        );
    }
}

export default FAQPage;
