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
                    <button
                        type="button"
                        onClick={this.onGenerate.bind(this)}>GENERATE</button>
                </div>
            </section>
        );
    }
}

export default ToolComponent;
