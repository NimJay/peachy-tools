import React from 'react';

import FreeSection from '../sections/FreeSection.jsx';
import OpenSourceSection from '../sections/OpenSourceSection.jsx';
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
                <OpenSourceSection />
                <FreeSection />
                <SuggestionsSection />
            </div>
        )
    }
}


export default HomePage;
