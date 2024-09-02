import React from 'react';
import './unit1.css';

const Unit1 = () => {
    return (
        <div>
            <section className='unit-heading'>
                <div>
                    <h1>English</h1>
                    <h2>Unit-1</h2>
                </div>
            </section>
            <section className='unit-content'>
                <div className='unit-content-1'>
                    <a href='/lesson'>Lesson</a>
                </div>
                <div className='unit-content-1'>
                    <a href='/practice'>Practice Sessions</a>
                </div>
                <div className='unit-content-1'>
                    <a href='/practiceexam'>Practice Exam</a>
                </div>
            </section>
        </div>
    )
}

export default Unit1
