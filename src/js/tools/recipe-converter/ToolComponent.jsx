import React from 'react'
import Output from '../../components/Output.jsx'
import TextField from '../../components/TextField.jsx'
import { StrNumTokens } from './StrNumTokens.js';

class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errorMessage: null,
            recipe: "2 eggs\n5.5 tablespoons of milk\n5ml butter",
            scaledStrNumTokens: null,
            fromServings: 1,
            toServings: 4,

            // After input change, we wait a bit (until user is done typing) before recomputing.
            currChangeId: 0
        };
    }


    componentDidMount() {
        this.scaleRecipe();
    }


    // State setters.
    setRecipe(e) {
        this.setState({ recipe: e.target.value }, this.rescaleRecipe.bind(this));
    }
    setFromServings(e) {
        this.setState({ fromServings: e.target.value }, this.rescaleRecipe.bind(this));
    }
    setToServings(e) {
        this.setState({ toServings: e.target.value }, this.rescaleRecipe.bind(this));
    }


    rescaleRecipe() {
        let changeId = this.state.currChangeId + 1;
        this.setState(
            { isLoading: true, errorMessage: "", currChangeId: changeId },
            this.waitAndRescale.bind(this, changeId)
        );
    }
    waitAndRescale(changeId) {
        setTimeout(() => {
            let { currChangeId } = this.state;
            if (currChangeId === changeId) {
                this.scaleRecipe();
            }
        }, 300);
    }

    scaleRecipe() {
        let { items, fromServings, toServings, recipe } = this.state;
        if (isNaN(Number(fromServings))) {
            return this.setState({ isLoading: false, errorMessage: "Original Servings must be a number." });
        }
        if (isNaN(Number(toServings))) {
            return this.setState({ isLoading: false,  errorMessage: "New Servings must be a number." });
        }
        this.setState({
            isLoading: false,
            scaledStrNumTokens: new StrNumTokens(recipe).scaleNumsBy(toServings/fromServings),
        });
    }


    render() {
        let { isLoading, errorMessage, recipe, fromServings, toServings,
            scaledStrNumTokens } = this.state;

        return (
            <main>
                <div className="container">
                    <form>

                        {/* TODO: Set up easy.css and use .col-1-2. */}
                        <div style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                            <TextField label="Original Servings" value={fromServings}
                                onChange={this.setFromServings.bind(this)}
                                maxLength="2" placeholder="0" />
                            <textarea value={recipe} onChange={this.setRecipe.bind(this)}
                                style={{ marginTop: '20px', height: '400px', fontSize: '18px', lineHeight: '1.5em' }}
                                placeholder="Type your recipe here..." autoFocus={true}
                                title="Type your recipe here...">
                            </textarea>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                            <TextField label="New Servings" value={toServings}
                                onChange={this.setToServings.bind(this)}
                                maxLength="2" placeholder="0" />
                            {isLoading && <p>Loading...</p>}
                            {!errorMessage && !isLoading && scaledStrNumTokens &&
                                <output style={{ marginTop: '20px', borderLeft: 'solid 2px rgba(0, 0, 0, 0)',
                                    padding: '8px' }}>
                                    <StrNumTokensRecipeDiv strNumTokens={scaledStrNumTokens} />
                                </output>}
                            <p className="color-salmon">{errorMessage}</p>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

function roundTo1Dp(number) {
    // Caution: Read https://stackoverflow.com/q/588004.
    return Number(number.toFixed(1));
}

const StrNumTokensRecipeDiv = ({ strNumTokens }) => {
    let tokenSpans = strNumTokens.map((token, i) => {
        return typeof token === "number"
            ? <span key={i} style={{backgroundColor:'rgba(149, 220, 95, 0.2)'}}>{roundTo1Dp(token)}</span>
            : <span style={{display: "inline", whiteSpace: "pre-wrap"}} key={i}>{token}</span>
    });
    return (<div style={{ fontSize: '18px', lineHeight: '1.5em' }}>{tokenSpans}</div>);
};

export default ToolComponent;
