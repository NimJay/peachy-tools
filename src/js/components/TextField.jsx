import React from 'react';

let nextId = 0; // Each <TextField> has an id.

/**
 * TextField
 * A textfield for text input.
 *
 * value: The current value.
 * label: The label.
 * placeholder: <input>'s placeholder'.
 * autoFocus: true iff cursor should autoFocus.
 * maxLength: Maximum length of <input> values.
 * style: style for the outer-most <div>.
 * onChange: onChange function on <input>.
 */
class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.id = nextId;
        nextId++;
    }

    render() {

        let { value, label, placeholder, onChange, autoFocus, maxLength, style } = this.props;

        let inputId = "textfield-" + this.id;

        return (
            <div className="textfield" style={style}>
                <label htmlFor={inputId}>{label}</label>
                <input type="text" value={value} autoFocus={autoFocus}
                    placeholder={placeholder} maxLength={maxLength}
                    onChange={onChange} id={inputId} />
            </div>
        );
    }
}

export default TextField;
