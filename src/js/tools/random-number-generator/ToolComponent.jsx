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
            <section>
                <div className="container">
                    <h1>{number}</h1>
                    <button
                        type="button"
                        onClick={this.onGenerate.bind(this)}>GENERATE</button>
                </div>
            </section>
        );
    }
}

export default ToolComponent;
