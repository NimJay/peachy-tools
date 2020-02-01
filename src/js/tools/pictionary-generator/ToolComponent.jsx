import React from 'react'
import { getNextPictionary } from './Pictionary.js'
import Output from '../../components/Output.jsx'
import Selections from '../../components/Selections.jsx'


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictionary: getNextPictionary(),
            iteration: 0,
            difficulty: 'All'
        };
    }

    setDifficulty(difficulty) {
        this.setState({ difficulty });
    }

    onSubmit(e) {
        e.preventDefault(); // Prevent page refresh.
        let { difficulty, iteration } = this.state,
            pictionary = getNextPictionary();

        if (difficulty !== 'All') {
            let isEasy = difficulty === 'Easy';
            while (Boolean(pictionary.isEasy) !== isEasy)
              pictionary = getNextPictionary();
        }

        iteration++;
        this.setState({ pictionary, iteration });
    }

    render() {
        let { difficulty, pictionary, iteration } = this.state;
        return (
            <main>
                <form className="container"
                    onSubmit={this.onSubmit.bind(this)}>

                    <Output style={{'minHeight': '2.5em'}}
                        iteration={iteration}>
                        {pictionary.pictionary}
                    </Output>
                    <div style={{'textAlign': 'right'}}>
                        <button type="submit"
                            autoFocus={true}>GENERATE</button>
                    </div>

                    <Selections selections={['Easy', 'Hard', 'All']}
                        selection={difficulty}
                        name="Difficulty"
                        style={{ 'marginTop': '30px', 'textAlign': 'right' }}
                        onSelect={this.setDifficulty.bind(this)} />
                </form>
            </main>
        );
    }
}


export default ToolComponent;
