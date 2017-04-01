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
    'Sometimes, less is more.',
    'Friendly reminder: don\'t worry too much.',
    'Friendly reminder: nothing really matters.',
    'Why complicate life?'
];


const FooterSection = () => (
    <section className='footersection'>
        <div className='container'>
            <Link to='/'>
                <img src='/favicon.png' />
            </Link>
            <p>
                {SLOGANS[Math.floor(Math.random() * SLOGANS.length)]}
            </p>
        </div>
    </section>
);


export default FooterSection;
