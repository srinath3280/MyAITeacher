import React from 'react';
import './subjects.css';

const Subjects = () => {
    return (
        <div>
            <section className='subjects-heading'>
                <div>
                    <h1>Subjects</h1>
                </div>
            </section>
            <section className='subjects-content'>
                <div className='subjects-content-1'>
                    <a href='/english'>English</a>
                    5 UNITS
                </div>
                <div className='subjects-content-1'>
                    <a href='/'>Telugu</a>
                    3 UNITS
                </div>
                <div className='subjects-content-1'>
                    <a href='/'>Hindi</a>
                    4 UNITS
                </div>
            </section>
        </div>
    )
}

export default Subjects
