import React from 'react'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: Math.random()
        };
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState({ number: Math.random() });
    }

    render() {
        let { number } = this.state;
        return (
            <main>
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <output style={{'minHeight': '2.5em'}}>{number}</output>
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
