import React, { useState, useEffect } from 'react';
import './dashboard.css';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CustomBarChart from './examresult/examresult';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return `${formattedDate.replace(',', '')} ${formattedTime}`;
};

const subjects = [
    { name: 'English', score: 87.37, color: '#D4AF37' },
    { name: 'Telugu', score: 81.86, color: '#FF6600' },
    { name: 'Hindi', score: 75.36, color: '#FF8C00' },
];

const Dashboard = () => {
    const [dateTime, setDateTime] = useState(new Date());

    const data = {
        labels: ['English', 'Telugu', 'Hindi'],
        datasets: [
            {
                label: 'Participation Rate',
                data: [88, 81.67, 92.33],
                backgroundColor: 'orange',
                borderRadius: 10, // To get rounded corners on the bars
                barThickness: 30, // Adjusts the thickness of the bars
            },
        ],
    };

    const options = {
        indexAxis: 'y', // This makes the bars horizontal
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend since it is not shown in the design
            },
            tooltip: {
                enabled: true, // Show tooltips on hover
            },
            datalabels: {
                display: true,
                align: 'center',
                anchor: 'center',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100, // Set max value to 100 as per the design
                ticks: {
                    stepSize: 20, // Optional: Adjust the step size for x-axis
                },
            },
            y: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every second

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <section className='dashboard-heading'>
                <div className='dashboard-heading-block'>
                    <h4>
                        Student Performance Dashboard
                    </h4>
                    <p>
                        Date refreshed at {formatDate(dateTime)}
                    </p>
                </div>
            </section>
            <section className='dashboard-content'>
                <div className='dashboard-content-left'>
                    <div className='dashboard-content-left-1'>
                        <div className='dashboard-content-left-1-left'>
                            <img src='https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png' alt='' />
                        </div>
                        <div className='dashboard-content-left-1-right'>
                            <p>
                                Name : <span>Srinath</span>
                            </p>
                            <p>
                                Class : <span>III</span>
                            </p>
                        </div>
                    </div>
                    <div className='dashboard-content-left-2'>
                        <div>
                            <h2>Student Participation Result</h2>
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                    <div className='dashboard-content-left-2'>
                        <h2>Examination Results</h2>
                        <CustomBarChart></CustomBarChart>
                    </div>
                </div>
                <div className='dashboard-content-right'>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <div style={{ width: '100%', marginBottom: '20px', textAlign: 'center' }}>
                            <h3>Avg. Subject Score</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>
                            {subjects.map((subject, index) => (
                                <div key={index} style={{ width: '150px', textAlign: 'center' }}>
                                    <CircularProgressbar
                                        value={subject.score}
                                        text={`${subject.score}`}
                                        styles={buildStyles({
                                            textSize: '16px',
                                            pathColor: subject.color,
                                            textColor: '#000',
                                            trailColor: '#d6d6d6',
                                        })}
                                    />
                                    <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{subject.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Dashboard
