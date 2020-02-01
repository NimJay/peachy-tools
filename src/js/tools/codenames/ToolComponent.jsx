import React from 'react';
import { Codenames } from './Codenames.js';


class ToolComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            codenames: new Codenames(),
        };
    }

    onClickSlot(slot, event) {
        event.preventDefault(); // Stop page refresh.

        const { codenames } = this.state;

        let coveredBy = slot.coveredBy;
        if (coveredBy === null) coveredBy = "Blue";
        else if (coveredBy === "Blue") coveredBy = "Red";
        else if (coveredBy === "Red") coveredBy = "Bystander";
        else if (coveredBy === "Bystander") coveredBy = null;
        slot.coveredBy = coveredBy;
        console.log(slot, codenames.board);

        this.setState({ codenames });
    }

    render() {
        const { codenames } = this.state;

        const slotRowTrs = codenames.board.map((rowOfSlots, i) =>
            <SlotRowTr
                slots={rowOfSlots}
                onClickSlot={this.onClickSlot.bind(this)}
                key={i} />
        );

        return (
            <main>
                <form>
                    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                        <table style={{ margin: 'auto' }}>
                            <tbody>
                                {slotRowTrs}
                            </tbody>
                        </table>
                    </div>
                </form>
            </main>
        );
    }
}


// <SlotRowTr>
const SlotRowTr = ({ slots, onClickSlot }) => {
    const slotTds = slots.map((slot, i) =>
        <SlotTd key={i} slot={slot} onClickSlot={onClickSlot} />
    );
    return (<tr>{slotTds}</tr>);
};


// <SlotTd>
const SlotTd = ({ slot, onClickSlot }) => {
    const buttonStyle = {
        fontSize: '18px', width: '100%', padding: '15px 8px', minWidth: '120px'
     };

    // Determine background-color.
    let bgColor = null;
    let cardTypeToColor = {
        "Blue":      "rgba(150, 220, 94, 1)", // Blue is actually green.
        "Bystander": "rgba(200, 200, 200, 1)",
        "Red":       "rgba(240, 90, 90, 1)",
    };
    buttonStyle["backgroundColor"] = cardTypeToColor[slot.coveredBy] || "rgba(255, 255, 255, 0)";

    return (
        <td style={{ padding: "2px" }}>
            <button style={buttonStyle} onClick={onClickSlot.bind(null, slot)}>
                {slot.word}
            </button>
        </td>
    );
};


export default ToolComponent;
