import React from 'react'
import { Link } from 'react-router-dom'


// A list of cliche slogans and phrases.
const SLOGANS = [
    // What is Peachy Tools?
    'Every little tool you need, in one place.',
    '"Peachy" is informal for excellent.',

    // Advice we take we want users to take.
    'Be simple.',
    'Don\'t waste your uniqueness.',
    'Often, less is more.',
    'Friendly reminder: don\'t worry too much.',
    'Why complicate life?'
];


const Footer = () => (
    <footer>
        <div className='container'>
            <Link to='/'>
                <img src='/favicon.png' alt='Peachy Tools Logo' />
            </Link>
            <p>
                {SLOGANS[Math.floor(Math.random() * SLOGANS.length)]}
            </p>
        </div>
    </footer>
);


export default Footer;
