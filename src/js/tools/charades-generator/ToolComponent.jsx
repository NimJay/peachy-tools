import React from 'react'
import { getNextCharade } from './Charade.js'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charade: getNextCharade()
        };
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState({ charade: getNextCharade() });
    }

    render() {
        let { charade } = this.state;
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <output style={{'minHeight': '2.5em'}}>{charade}</output>
                        <div style={{'textAlign': 'right'}}>
                            <button type="submit">GENERATE</button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}


export default ToolComponent;
