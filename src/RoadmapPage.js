import React, { Component } from 'react';

// Roadmap modules
import Roadmap from './components/Roadmap';

class RoadmapPage extends Component {
    render() {
        return (
            <div className="Roadmap_page">
                <div className="container">
                    <Roadmap />
                </div>
            </div>
        );
    }
}

export default RoadmapPage;
