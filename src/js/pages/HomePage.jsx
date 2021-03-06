import React from 'react';

import FreeSection from '../sections/FreeSection.jsx';
import SuggestionsSection from '../sections/SuggestionsSection.jsx';
import ToolSearchSection from '../sections/ToolSearchSection.jsx';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        let { } = this.state;

        return (
            <div className="page">
                <ToolSearchSection />
                <FreeSection />
                <SuggestionsSection />
            </div>
        )
    }
}


export default HomePage;
