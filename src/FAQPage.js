import React, { Component } from 'react';

import FAQ from './components/FAQ';

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
