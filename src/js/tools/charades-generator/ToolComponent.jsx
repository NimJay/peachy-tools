import React from 'react'


// A list of charades.
const CHARADES = [
    "Inception", "Ski Lift", "Lion King", "Message In A Bottle",
    "Cat Food", "Ice Age", "Sloth", "Pikachu", "Time Machine",
    "Harry Potter", "Computer Bug", "Google Search", "Graduation",
    "Gold Digger", "Broom"
];


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charade: CHARADES[Math.floor(Math.random() * CHARADES.length)]
        };
    }

    onGenerate() {
        this.setState({
            charade: CHARADES[Math.floor(Math.random() * CHARADES.length)] });
    }

    render() {
        let { charade } = this.state;
        return (
            <section className="toolsection">
                <div className="container">
                    <h1 style={{'minHeight': '2.5em'}}>{charade}</h1>
                    <button
                        type="button"
                        onClick={this.onGenerate.bind(this)}>GENERATE</button>
                </div>
            </section>
        );
    }
}


export default ToolComponent;
