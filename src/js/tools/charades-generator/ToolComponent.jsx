import React from 'react'
import { getNextCharade } from './Charade.js'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charade: getNextCharade()
        };
    }

    onGenerate() {
        this.setState({ charade: getNextCharade() });
    }

    render() {
        let { charade } = this.state;
        return (
            <section className="toolsection">
                <div className="container">
                    <h1 style={{'minHeight': '2.5em'}}>{charade}</h1>
                    <div style={{'textAlign': 'right'}}>
                        <button
                            onClick={this.onGenerate.bind(this)}
                            type="button">GENERATE</button>
                    </div>
                </div>
            </section>
        );
    }
}


export default ToolComponent;
