import React from 'react';


/**
 * Checkbox
 * className: className for the outer most <label>.
 * label: The label.
 * style: style for the outer most <label>.
 * value: true of false.
 * onChange(value): function to call when (un)checked.
 */
class Checkbox extends React.Component {


    onChange(e) {
        console.log(4);
        let { value, onChange } = this.props;
        if (onChange) onChange(!value);
    }

    render() {
        let { style, className, label, value } = this.props;

        // className
        className = className ? className : '';

        return (
            <label className={"checkbox " + className} style={style}>
                <span>{label}</span>
                <input type="checkbox" checked={value}
                    onChange={this.onChange.bind(this)} />
                <span><span></span></span>
            </label>
        );
    }
}


export default Checkbox;
