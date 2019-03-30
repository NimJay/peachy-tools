import React from 'react'
import Output from '../../components/Output.jsx'
import TextField from '../../components/TextField.jsx'
import { generatePermutations } from './Permutations.js';

class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            errorMessage: null,
            items: "Apple, Banana, Cherry",
            permutationSize: 2,
            permutations: [],
        };
    }

    componentDidMount() {
        this.updatePermutations();
    }

    // State setters.
    setItems(e) {
        this.setState(
            { items: e.target.value, isLoading: true, errorMessage: "" },
            this.updatePermutations.bind(this)
        );
    }
    setPermutationSize(e) {
        this.setState(
            { permutationSize: e.target.value, isLoading: true, errorMessage: "" },
            this.updatePermutations.bind(this)
        );
    }


    updatePermutations() {
        let { items, permutationSize } = this.state;

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
        if (items.length < permutationSize) {
            errorMessage = 'Size of Permutations is too high.';
        }
        if (isNaN(Number(permutationSize))) {
            errorMessage = 'Size of Permutations is invalid.';
        }
        if (errorMessage) {
            return this.setState({ isLoading: false, errorMessage: errorMessage });
        }

        this.setState({
            isLoading: false,
            permutations: generatePermutations(items, Number(permutationSize))
        });
    }


    render() {
        let { isLoading, errorMessage, items, permutationSize, permutations } = this.state,
            numOfPermutations = permutations.length;

        let permutationsDivs = permutations.map((comb, i) =>
            <div key={i}>{comb.join(", ")}</div>
        );

        return (
            <main>
                <div className="container">
                    <form>
                        <textarea value={items} onChange={this.setItems.bind(this)}
                            placeholder="Apple, Banana, Cherry, ..." autoFocus={true}
                            title="Items">
                        </textarea>

                        <TextField label="Size of Permutations" value={permutationSize}
                            onChange={this.setPermutationSize.bind(this)}
                            maxLength="2" placeholder="0" style={{ marginTop: '20px', width: '143px' }} />

                        {isLoading && <p>Loading...</p>}
                        <p className="color-salmon">{errorMessage}</p>
                        {!errorMessage && !isLoading &&
                            <label style={{ fontSize: '0.6em', color: 'rgba(0, 0, 0, 0.6)' }}>
                                {numOfPermutations} Permutations
                            </label>}
                        <output style={{ marginTop: '0', fontSize: '16px' }}>
                            {Number(permutationSize) === 0 ? '_' : permutationsDivs}
                        </output>
                    </form>
                </div>
            </main>
        );
    }
}


export default ToolComponent;
