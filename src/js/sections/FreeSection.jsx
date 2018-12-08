import React from 'react'
import { Link } from 'react-router-dom'


const FreeSection = () => (
    <section>
        <div className='container'>
            <h2><em>Free</em> and <em>Open-source</em></h2>
            <p>
                Peachy Tools is non-profit.<br />
                We will never sell ads. We plan to run on donations.
            </p>
            <Link to='/contribute' className='button'>CONTRIBUTE</Link>
        </div>
    </section>
);


export default FreeSection;
