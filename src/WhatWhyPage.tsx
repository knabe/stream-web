import * as React from 'react'

// What&Why modules
import Connect from './components/Connect'
import How from './components/How'
// import Performers from './components/Performers'
// import Solution from './components/Solution'
import Video from './components/Video'

class WhatWhyPage extends React.Component {
    public render() {
        return (
            <div className="WhatWhy_page">
                <Video fullWidth />

                <div className="container">
                    {/* <Performers />
                    <Solution /> */}
                </div>

                <How />

                <div className="container">
                    <Connect />
                </div>
            </div>
        )
    }
}

export default WhatWhyPage
