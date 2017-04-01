import React from 'react';
import { Link } from 'react-router-dom';
import ToolSearchSection from '../sections/ToolSearchSection.jsx';

class ContributePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        let { } = this.state;

        return (
            <div className="page contributepage">
                <section>
                    <div className="container">
                        <h1>Contribute</h1>
                        <p>
                            There is currently 1 way to contribute to Peachy Tools: as a <a href="#coder">Coder</a>.
                        </p>
                    </div>
                </section>

                <section id="coder">
                    <div className="container">
                        <h2>Become a Coder</h2>
                        <p>To contribute, you <i>may</i> need:</p>
                        <ul>
                            <li>a good knowledge of <a target="_blank" href="https://facebook.github.io/react/">React</a></li>
                            <li>a good knowledge of <a target="_blank" href="https://github.com/lukehoban/es6features">ES6</a></li>
                            <li>experience with <a target="_blank" href="https://www.npmjs.com">npm</a></li>
                            <li>experience with <a target="_blank" href="https://git-scm.com/">Git</a></li>
                            <li>experience with <a target="_blank" href="https://webpack.js.org/">webpack</a></li>
                        </ul>
                        <p>Our source code is hosted on GitHub.</p>
                        <a
                            className="button"
                            href="https://github.com/NimJay/peachy-tools">
                            GITHUB
                        </a>
                    </div>
                </section>

                <ToolSearchSection />
            </div>
        )
    }
}


export default ContributePage;
