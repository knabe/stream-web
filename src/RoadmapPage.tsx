import * as React from 'react'

// Roadmap modules
import Roadmap from './components/Roadmap'

class RoadmapPage extends React.Component {
  public render() {
    return (
      <div className="Roadmap_page">
        <div className="container">
          <Roadmap />
        </div>
      </div>
    )
  }
}

export default RoadmapPage
