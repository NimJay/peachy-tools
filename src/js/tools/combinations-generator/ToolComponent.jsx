import React from 'react'
import Output from '../../components/Output.jsx'
import TextField from '../../components/TextField.jsx'
import { generateCombinations } from './Combinations.js';

class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errorMessage: null,
            items: "Apple, Banana, Cherry",
            combinationSize: 2, // The "k" of "n choose k".
            combinations: [],
        };
    }

    componentDidMount() {
        this.updateCombinations();
    }

    // State setters.
    setItems(e) {
        this.setState(
            { items: e.target.value, isLoading: true, errorMessage: "" },
            this.updateCombinations.bind(this)
        );
    }
    setCombinationSize(e) {
        this.setState(
            { combinationSize: e.target.value, isLoading: true, errorMessage: "" },
            this.updateCombinations.bind(this)
        );
    }


    updateCombinations() {
        let { items, combinationSize } = this.state;

        // Convert items to Array of strings.
        items = items
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "");

        // Validate input.
        let errorMessage = null;
        if (items.length === 0) {
            errorMessage = 'Invalid list of items.';
        }
        if (items.length < combinationSize) {
            errorMessage = 'Size of Combinations is too high.';
        }
        if (isNaN(Number(combinationSize))) {
            errorMessage = 'Size of Combinations is invalid.';
        }
        if (errorMessage) {
            return this.setState({ isLoading: false, errorMessage: errorMessage });
        }

        this.setState({
            isLoading: false,
            combinations: generateCombinations(items, Number(combinationSize))
        });
    }


    render() {
        let { isLoading, errorMessage, items, combinationSize, combinations } = this.state,
            numOfCombinations = combinations.length;

        let combinationsDivs = combinations.map((comb, i) =>
            <div key={i}>{comb.join(", ")}</div>
        );

        return (
            <main>
                <div className="container">
                    <form>
                        <textarea value={items} onChange={this.setItems.bind(this)}
                            placeholder="Apple, Banana, Cherry, ..." autoFocus={true}>
                        </textarea>

                        <TextField label="Size of Combinations (k)" value={combinationSize}
                            onChange={this.setCombinationSize.bind(this)}
                            maxLength="2" placeholder="2" style={{ marginTop: '20px', width: '143px' }} />

                        {isLoading && <p>Loading...</p>}
                        <p className="color-salmon">{errorMessage}</p>
                        {!errorMessage && !isLoading &&
                            <label style={{ fontSize: '0.6em', color: 'rgba(0, 0, 0, 0.6)' }}>{numOfCombinations} combinations:</label>}
                        <output style={{ marginTop: '0', fontSize: '16px' }}>
                            {Number(combinationSize) === 0 ? '_' : combinationsDivs}
                        </output>
                    </form>
                </div>
            </main>
        );
    }
}


export default ToolComponent;
