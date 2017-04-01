import React from 'react';
import { Link } from 'react-router-dom';
import Es6Promise from 'es6-promise/auto';

import FreeSection from '../sections/FreeSection.jsx';
import OpenSourceSection from '../sections/OpenSourceSection.jsx';
import ToolSearchSection from '../sections/ToolSearchSection.jsx';
import { log } from '../util/global.js';


class ToolPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tool: null,
            toolComponent: null,
            importingTool: false, // true iff a Tool is currently being imported.
            toolImported: false, // true iff the Tool is successfully imported.
            lastImportId: -1 // Each import Promise has an ID.
        };
    }

    componentWillMount() {
        this.importTool(this.props.match.params.tool);
    }

    /**
     * Import the specified given tool.
     */
    importTool(tool) {

        let { lastImportId } = this.state,
            promise = null;

        // New import.
        lastImportId++;
        this.setState({ importingTool: true, 'lastImportId': lastImportId });

        // The import Promise.
        if (tool == 'random-number-generator') {promise = import('../tools/random-number-generator/ToolComponent.jsx')}
        else if (tool == 'charades-generator') {promise = import('../tools/charades-generator/ToolComponent.jsx')}
        else if (tool == 'superhero-name-generator') {promise = import('../tools/superhero-name-generator/ToolComponent.jsx')}
        // else if (tool == 'pearson-correlation-coefficient-calculator') {promise = import('../tools/pearson-correlation-coefficient-calculator/ToolComponent.jsx')}

        // Nim: Yes, wasting a Promise ID. But clean code.
        else return this.setState({ toolImported: false });

        promise
            .then(this.onImportToolSuccess.bind(this, lastImportId)) // Success.
            .catch(this.onImportToolError.bind(this, lastImportId)); // Error.
    }
    onImportToolSuccess(importId, module) {
        log("Success for import Promise with ID: " + importId);

        // We only care about the most recent import Promise.
        let { lastImportId } = this.state;
        if (lastImportId != importId) return null;

        this.setState({ toolImported:true, 'toolComponent': (<module.default />) });
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

        let { toolImported, toolComponent } = this.state;

        return (
            <div className="page">

                {toolImported ? toolComponent : null}
                {toolImported === false ? <NotFoundDiv /> : null}
                {toolImported === null ? <LoadingDiv /> : null}

                {/* Padding */ } <div style={{ paddingTop: '150px'}}></div>

                <ToolSearchSection />
                <OpenSourceSection />
                <FreeSection />
            </div>
        )
    }
}

const LoadingDiv = () => (<div>Loading...</div>);
const NotFoundDiv = () => (<div>Page not found. :(</div>);

export default ToolPage;
