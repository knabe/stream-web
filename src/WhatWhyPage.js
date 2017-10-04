import React, { Component } from 'react';

// What&Why modules
import Video from './components/Video';
import Performers from './components/Performers';
import Solution from './components/Solution';
import How from './components/How';
import Connect from './components/Connect';

// import './WhatWhyPage.css';

class WhatWhyPage extends Component {
    render() {
        return (
            <div className="WhatWhy_page">
                <Video fullWidth={true} />

                <div className="container">
                    <Performers />
                    <Solution />
                </div>

                <How />

                <div className="container">
                    <Connect />
                </div>
            </div>
        );
    }
}

export default WhatWhyPage;
