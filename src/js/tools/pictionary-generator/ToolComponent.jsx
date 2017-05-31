import React from 'react'
import { getNextPictionary } from './Pictionary.js'
import Output from '../../components/Output.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictionary: getNextPictionary(),
            iteration: 0
        };
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState(
            { pictionary: getNextPictionary(), iteration: this.state.iteration + 1 });
    }

    render() {
        let { pictionary, iteration } = this.state;
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Output style={{'minHeight': '2.5em'}}
                            iteration={iteration}>{pictionary}</Output>
                        <div style={{'textAlign': 'right'}}>
                            <button type="submit"
                                autoFocus={true}>GENERATE</button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}


export default ToolComponent;
