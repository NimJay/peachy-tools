import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


// Pages
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContributePage from './pages/ContributePage.jsx'
import PurposePage from './pages/PurposePage.jsx'
import ToolPage from './pages/ToolPage.jsx'

import Footer from './sections/Footer.jsx';


// <PeachyTools>
const PeachyTools = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contribute" component={ContributePage} />
                <Route path="/purpose" component={PurposePage} />
                <Route path="/:tool" component={ToolPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);


render((
    <PeachyTools />
), document.getElementById('peachytools'));


// Service Worker (for offline support, etc)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/swoff.js', { scope: '/' });
}
