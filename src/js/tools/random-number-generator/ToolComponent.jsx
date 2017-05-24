import React from 'react'
import Output from '../../components/Output.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: Math.random(),
            iteration: 0
        };
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState(
            { number: Math.random(), iteration: this.state.iteration + 1 });
    }

    render() {
        let { number, iteration } = this.state;
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <Output style={{'minHeight': '2.5em'}}
                            iteration={iteration}>{number}</Output>
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
