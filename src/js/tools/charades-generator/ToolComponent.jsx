import React from 'react'
import { getNextCharade } from './Charade.js'
import Output from '../../components/Output.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charade: getNextCharade(),
            iteration: 0
        };
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState(
            { charade: getNextCharade(), iteration: this.state.iteration + 1 });
    }

    render() {
        let { charade, iteration } = this.state;
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Output style={{'minHeight': '2.5em'}}
                            iteration={iteration}>{charade}</Output>
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
