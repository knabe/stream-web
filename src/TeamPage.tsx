import * as React from 'react'

// Team modules
import Story from './components/Story'
import Team from './components/Team'

class TeamPage extends React.Component {
  public render() {
    return (
      <div className="Team_page">
        <Story />
        <hr/>
        <Team />
      </div>
    )
  }
}

export default TeamPage
