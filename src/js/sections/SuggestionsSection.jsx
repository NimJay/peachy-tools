import { ajax } from 'jquery'
import React from 'react'
import { Link } from 'react-router-dom'
import { log } from '../util/global.js'


class SuggestionsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAjax: null,
            suggestion: "",
            submitted: false
        };
    }

    setSuggestion(e) {this.setState({ suggestion: e.target.value });}

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        this.setState({ submitted: true });
        ajax({
            url: '/php/create-suggestion.php',
            type: 'POST',
            dataType: 'json',
            data: {
                'suggestion': this.state.suggestion,
                'url': window.location.href
            },
            complete: (jqXHR) => {log(jqXHR);}
        });
    }

    render() {

        let { suggestion, submitted } = this.state;

        if (submitted) {
            return (
                <section style={{'minHeight': '234px', 'fontSize': '36px', 'lineHeight': '1.2em'}}>
                    <div className='container'>
                        <p style={{'margin': '0px'}}>Thank you for your feedback.</p>
                    </div>
                </section>
            );
        }

        return (
            <section>
                <div className='container'>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <textarea value={suggestion} style={{'height': '4em'}}
                            onChange={this.setSuggestion.bind(this)}
                            placeholder='How can we improve?'
                            title='How can we improve?'
                            maxLength={500} />
                            <div style={{'textAlign': 'right', 'margin': '10px 0px'}}>
                                <button type='submit'
                                    disabled={suggestion.length == 0}>
                                    SUBMIT</button>
                            </div>
                    </form>
                </div>
            </section>
        );
    }
}


export default SuggestionsSection;
