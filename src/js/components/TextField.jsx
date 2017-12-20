import React from 'react';

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
const TextField = ({ value, label, placeholder, onChange, autoFocus, maxLength,
    style }) => {

    return (
        <div className="textfield" style={style}>
            <label>{label}</label>
            <input type="text" value={value} autoFocus={autoFocus}
                placeholder={placeholder} maxLength={maxLength}
                onChange={onChange} />
        </div>
    );
}

export default TextField;
