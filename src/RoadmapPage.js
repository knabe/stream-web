import React, { Component } from 'react';

// Roadmap modules
import Roadmap from './components/Roadmap';

// import './RoadmapPage.css';

class RoadmapPage extends Component {
    render() {
        return (
            <div className="Roadmap_page row">
                <div className="container">
                    <Roadmap />
                </div>
            </div>
        );
    }
}

export default RoadmapPage;
