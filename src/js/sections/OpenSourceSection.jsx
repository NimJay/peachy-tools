import React from 'react'
import { Link } from 'react-router-dom'


const OpenSourceSection = () => (
    <section>
        <div className='container'>
            <h2>Peachy Tools is <b>Open-source</b></h2>
            <p>
                "Open-source" means anyone can view, edit, fix, and/or add to Peachy Tools' code.
            </p>
            <Link to='/contribute' className='button'>CONTRIBUTE</Link>
        </div>
    </section>
);


export default OpenSourceSection;
