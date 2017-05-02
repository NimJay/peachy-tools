import React from 'react'
import Checkbox from '../../components/Checkbox.jsx'
import Output from '../../components/Output.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            iteration: 0,
            ignoreWhitespace: false
        };
    }


    // State setters.
    setText(e) {
        this.setState(
            {text: e.target.value, iteration: this.state.iteration + 1});
    }
    setIgnoreWhitespace(iw) {
        this.setState(
            {ignoreWhitespace: iw, iteration: this.state.iteration + 1});
    }


    render() {

        let { text, iteration, ignoreWhitespace } = this.state,
            totalCharacters = text.length;

        if (ignoreWhitespace)
            totalCharacters = text.replace(/\s/g,'').length;

        return (
            <main>
                <div className="container">
                    <form>
                        <textarea value={text}
                            onChange={this.setText.bind(this)}
                            placeholder="Type your text here..."></textarea>
                        <Output iteration={iteration}>
                            {totalCharacters} characters
                        </Output>
                        <Checkbox value={ignoreWhitespace}
                            label="Ignore whitespace (spaces, tabs, etc.)"
                            onChange={this.setIgnoreWhitespace.bind(this)} />
                    </form>
                </div>
            </main>
        );
    }
}


export default ToolComponent;
