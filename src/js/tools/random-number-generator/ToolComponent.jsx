import React from 'react'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: Math.random()
        };
    }

    onGenerate() {
        this.setState({ number: Math.random() });
    }

    render() {
        let { number } = this.state;
        return (
            <section className="toolsection">
                <div className="container">
                    <h1 style={{'minHeight': '2.5em'}}>{number}</h1>
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
