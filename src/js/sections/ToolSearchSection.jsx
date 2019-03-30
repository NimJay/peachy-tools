import React from 'react'
import { Link } from 'react-router-dom'
import { searchTools } from '../util/Tool.js' // Nim: TODO: Use import Promise.
import { log } from '../util/global.js'


/**
 * ToolSearchSection
 */
class ToolSearchSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            toolResults: [] // List of tools to be suggested.
        };
    }


    // Initial search.
    componentDidMount() {
        this.setState({
            toolResults: searchTools(this.state.searchString)
        });
    }


    // State setters.
    onSearch(e) {
        let searchString = e.target.value,
            toolResults = searchTools(searchString);
        this.setState({ searchString, toolResults });
    }
    onToolSelect() {
        // Scroll to the very top.
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }


    render () {

        let { toolResults } = this.state;

        // <ToolLink>s
        let toolLinks = toolResults.map(t =>
            <ToolLink tool={t} onClick={this.onToolSelect.bind(this)}
                key={t.url} />
        );

        return (
            <section className="toolsearchsection">
                <div className="container">
                    <input
                        type="text"
                        onChange={this.onSearch.bind(this)}
                        placeholder="Search for a Tool" title="Search for a Tool" />
                    <nav className="tools">
                        {toolLinks}
                    </nav>
                </div>
            </section>
        );
    }
}


const ToolLink = ({ tool, onClick }) => (
    <Link to={tool.url} className="tool" onClick={onClick}>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
    </Link>
);


export default ToolSearchSection;
