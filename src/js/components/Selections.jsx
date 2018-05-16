import React from 'react';

/**
 * <Selections>
 * selections: List of (strings) selections.
 * selection: The current selection.
 * name: The name of the <input>s (name the thing being selected).
 * onSelect(selection): Callback for updating selection.
 */
const Selections = ({ selections, selection, name, onSelect }) => (
    <div className='selections'>
        {selections.map(s => <Selection value={s} name={name}
            onSelect={onSelect.bind(null, s)} selection={selection} key={s} />)}
    </div>
);

const Selection = ({ name, selection, value, onSelect }) => (
    <label className={selection == value ? 'selected' : ''}>{value}
        <input type="radio" onClick={onSelect} name={name} value={value} />
    </label>
);

export default Selections;
