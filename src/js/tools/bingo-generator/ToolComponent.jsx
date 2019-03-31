import React from 'react'
import { BingoCard } from './Bingo.js';


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bingoCard: new BingoCard(5, 5),
        };
    }

    // State setters.
    toggleSquare(r, c) {
        let { bingoCard } = this.state;
        bingoCard.toggleSquare(r, c);
        this.setState({ bingoCard });
    }


    render() {
        let { bingoCard } = this.state;

        let bingoRowTrs = bingoCard.rows.map((bingoRow, i) =>
            <BingoRowTr bingoRow={bingoRow}
                onToggleSquare={this.toggleSquare.bind(this, i)} key={i} />
        );

        return (
            <main>
                <div className="container">
                    <form>

                        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                            <table style={{ fontSize: '26px' }}>
                                <thead>
                                    <tr>
                                        <th>B</th><th>I</th><th>N</th><th>G</th><th>O</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bingoRowTrs}
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>
            </main>
        );
    }
}


// <BingoRowTr>
const BingoRowTr = ({ bingoRow, onToggleSquare }) => {

    let bingoSquareTds = bingoRow.map((square, i) =>
        <BingoSquareTd bingoSquare={square}
            onToggleSquare={onToggleSquare.bind(null, i)} key={i} />
    );

    return (<tr>{bingoSquareTds}</tr>);
};


// <BingoSquareTd>
const BingoSquareTd = ({ bingoSquare, onToggleSquare }) => {

    const onClick = (e) => {
        e.preventDefault(); // Avoid page refresh.
        onToggleSquare();
    };

    let buttonStyle = { fontSize: '17px', padding: '5px', minWidth: '40px' };

    if (!bingoSquare.isMarked) {
        buttonStyle["backgroundColor"] = "rgba(0, 0, 0, 0)";
    }

    return (
        <td style={{ padding: '8px' }}>
            <button style={buttonStyle} onClick={onClick}>
                {bingoSquare.number}
            </button>
        </td>
    );
};


export default ToolComponent;
