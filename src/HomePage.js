import React, { Component } from 'react';

// Home modules
import Header from './components/Header';
import Performers from './components/Performers';
import Solution from './components/Solution';
import Video from './components/Video';

// import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="Home_page">
                <Header />
                <div className="container">
                    <Performers />
                    <Solution />
                </div>
                <Video />
            </div>
        );
    }
}

export default HomePage;
