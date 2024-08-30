import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
            <section className='home-heading'>
                <div className='home-heading-text'>
                    <h1>MyAITeacher</h1>
                </div>
                <div className='home-heading-content'>
                    <div className='home-heading-content-1'><i class="bi bi-gem"></i> 0</div>
                    <div className='home-heading-content-2'><i class="bi bi-gem"></i> 0</div>
                </div>
            </section>

            <section className='home-content'>
                <div className='home-content-learning'>
                    <h1>Learning Lessons</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                    <a href='/'>Learn</a>
                </div>
                <div className='home-content-classes'>
                    <h1>Class-I Subjects</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                    <a href='/subjects'>Subjects</a>
                </div>
                <div className='home-content-practice'>
                    <h1>Practice Sections</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                    <a href='/'>Practice</a>
                </div>
            </section>
        </div>
    )
}

export default Home
