import React from 'react';
import { Link } from 'react-router-dom';
import Es6Promise from 'es6-promise/auto';

import FreeSection from '../sections/FreeSection.jsx';
import SuggestionsSection from '../sections/SuggestionsSection.jsx';
import ToolSearchSection from '../sections/ToolSearchSection.jsx';
import { log } from '../util/global.js';
import { getToolByUrl } from '../util/Tool.js';


class ToolPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tool: null,
            toolComponent: null,
            importingTool: false, // true iff a Tool is currently being imported.
            toolImported: false, // true iff the Tool is successfully imported.
            lastImportId: -1, // Each import Promise has an ID.
            initialTitle: document.title // Save the title of the document.
        };
    }

    componentWillMount() {
        this.importTool(this.props.match.params.tool);
    }
    componentWillUnmount() {
        document.title = this.state.initialTitle; // Revert title.
    }

    /**
     * Import the specified given tool.
     */
    importTool(toolUrl) {

        let { lastImportId } = this.state,
            promise = null,
            tool = getToolByUrl(toolUrl);

        // Tool/Page not found.
        if (!tool)
            return this.setState({ tool: null, toolImported: false });

        // The import Promise.
        if (toolUrl == 'character-counter') promise = import('../tools/character-counter/ToolComponent.jsx');
        else if (toolUrl == 'charades-generator') promise = import('../tools/charades-generator/ToolComponent.jsx');
        else if (toolUrl == 'exam-timer') promise = import('../tools/exam-timer/ToolComponent.jsx');
        else if (toolUrl == 'pictionary-generator') promise = import('../tools/pictionary-generator/ToolComponent.jsx');
        else if (toolUrl == 'random-number-generator') promise = import('../tools/random-number-generator/ToolComponent.jsx');
        // else if (tool == 'superhero-name-generator') {promise = import('../tools/superhero-name-generator/ToolComponent.jsx')}
        // else if (tool == 'pearson-correlation-coefficient-calculator') {promise = import('../tools/pearson-correlation-coefficient-calculator/ToolComponent.jsx')}

        // New import.
        lastImportId++;
        this.setState({
            'importingTool': true, 'lastImportId': lastImportId, 'tool': tool
        });

        promise
            .then(this.onImportToolSuccess.bind(this, lastImportId)) // Success.
            .catch(this.onImportToolError.bind(this, lastImportId)); // Error.
    }
    onImportToolSuccess(importId, module) {
        log("Success for import Promise with ID: " + importId);

        // We only care about the most recent import Promise.
        let { lastImportId, tool } = this.state;
        if (lastImportId != importId) return null;
        document.title = tool.name + " - Peachy Tools";
        this.setState({
            toolImported: true, importingTool: false,
            'toolComponent': (<module.default />) });
    }
    onImportToolError(importId, module) {
        log("Error for import Promise with ID: " + importId);

        // We only care about the most recent import Promise.
        let { lastImportId } = this.state;
        if (lastImportId != importId) return null;

        this.setState({ toolImported: false, importingTool: false });
    }


    componentWillReceiveProps(newProps) {
        // New tool loaded!
        if (newProps.match.params.tool != this.props.match.params.tool) {
            this.importTool(newProps.match.params.tool);
        }
    }

    render() {

        let { tool, importingTool, toolImported, toolComponent } = this.state,
            className = 'page toolpage' +
                (importingTool ? ' loading': '');

        return (
            <div className={className}>

                {toolImported ? toolComponent : null}
                {tool === null ? <NotFoundSection /> : null}
                {toolImported ? <Header tool={tool} /> : null}

                <ToolSearchSection />

                <aside>
                    <FreeSection />
                    <SuggestionsSection />
                </aside>
            </div>
        )
    }
}


// <Header>
const Header = ({ tool }) => (
    <header>
        <div className='container'>
            <h1>{tool.name}</h1>
            <p>{tool.description}</p>
        </div>
    </header>
);


// <NotFoundSection>
const NotFoundSection = () => (
    <section className='notfound'>
        <div className='container'>
            <h1>Page Not Found</h1>
            <p>The requested page or tool could not be found.</p>
        </div>
    </section>
);


export default ToolPage;
