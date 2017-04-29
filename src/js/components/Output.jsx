import React from 'react';


const TIME_ANIMATE_OUT = 150; // Milliseconds.


/**
 * Output
 * style: style for the outer most <output>.
 * className: className for the outer most <output>.
 * iteration: integer which, if increased, will animate the component.
 */
class Output extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
            hidden: false
        };
    }

    componentWillReceiveProps(newProps) {
        let { iteration, children } = this.props;
        if (newProps.iteration > iteration) { // New iteration.
            this.setState({ hidden: true, iteration: newProps.iteration },
            setTimeout.bind(null,
                this.unhide.bind(this, newProps.iteration, newProps.children),
                TIME_ANIMATE_OUT));
        }
    }

    unhide(iteration, children) {
        // Unhide if the iteration is not out-dated.
        if (this.state.iteration == iteration)
            this.setState({ 'hidden': false, 'children': children });
    }


    render() {
        let { style, className } = this.props,
            { children, hidden } = this.state;

        // className
        className = className ? className : '';
        if (hidden) className += ' hidden';

        return (
            <output className={className} style={style}>
                {children}
            </output>
        );
    }
}


export default Output;
