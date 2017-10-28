import * as React from 'react'

import FAQ from './components/FAQ'

class FAQPage extends React.Component {
    public render() {
        return (
            <div className="FAQ_page">
                <div className="container">
                    <FAQ />
                </div>
            </div>
        )
    }
}

export default FAQPage
