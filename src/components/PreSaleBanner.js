import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PreSaleBanner.css';

class PreSaleBanner extends Component {
    render() {
        return (
            <div className="PreSaleBanner">
                <span>PRESALE OPEN NOW</span>
                <a className="btn" href="https://streamtoken.typeform.com/to/QlQ6Gp">EXPRESS INTEREST</a>
            </div>
        );
    }
}

export default PreSaleBanner;
