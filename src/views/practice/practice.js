import React, { useState, useEffect } from 'react';
import './practice.css';


const data = ["nintendo", "grabbed", "believe", "wrinkled", "grimaced"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Practice = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResult] = useState("");
    const [correct, setCorrect] = useState(null);



    const word = 'well';
    const gridSize = 5;
    const [grid, setGrid] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        generateGrid();
    }, [word]);

    const generateGrid = () => {
        const letters = word.split('');
        const remainingSlots = gridSize * gridSize - letters.length;
        const randomLetters = Array.from({ length: remainingSlots }, () =>
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        );

        const puzzleLetters = [...letters, ...randomLetters].sort(() => Math.random() - 0.5);
        const puzzleGrid = [];

        for (let i = 0; i < gridSize; i++) {
            puzzleGrid.push(puzzleLetters.slice(i * gridSize, (i + 1) * gridSize));
        }

        setGrid(puzzleGrid);
    };

    const handleSelect = (letter) => {
        setSelected((prev) => [...prev, letter]);
    };

    const speakWord = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(utterance);
    };



    const handleMicClick = () => {
        recognition.start();

        recognition.onresult = (event) => {
            const spokenWord = event.results[0][0].transcript.trim().replace(/\./g, "").toLowerCase();
            // console.log(event.results[0][0].transcript.trim().replace(/\./g, "").toLowerCase())
            const currentWord = data[currentIndex].toLowerCase();
            // console.log(currentWord)

            if (spokenWord === currentWord) {
                setCorrect(true);
            } else {
                setCorrect(false);
            }

            setResult(spokenWord);
        };
    };

    const nextWord = () => {
        setCorrect(null);
        setResult("");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };


    return (
        <div>
            <div style={{width:'80%',height:'auto',margin:"25px auto 25px -375px"}}>
                <a href='/unit1' style={{ textDecoration: 'none', color: "white", backgroundColor: 'black', padding: '5px 15px'}}>Back</a>
            </div>
            <section className='practice-heading'>
                <div>
                    <h2>Unit-I</h2>
                    <h4>Practice session</h4>
                </div>
            </section>
            <section className='practice-section1'>
                <h2 style={{ textDecoration: 'underline' }}>Part-I</h2>
                <div className='practice-section1-puzzle' style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 50px)` }}>
                    {grid.flat().map((letter, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(letter)}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'yellow',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '24px',
                                border: '1px solid black',
                                cursor: 'pointer',
                            }}
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <div>
                    <strong>Text : </strong> {word}
                    <button onClick={speakWord} style={{ fontSize: '18px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                        <i class="bi bi-mic"></i>
                    </button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <strong>Selected Characters : </strong> {selected.join('')}
                </div>
            </section>

            <section className='practice-section2'>
                <h2 style={{ textDecoration: 'underline' }}>Part-II</h2>
                <p style={{color:'red', fontSize:'18px'}}>
                    * Please read the word after the click on speak button
                </p>
                <div>
                    <h1>Word: {data[currentIndex]}</h1>
                    <button onClick={handleMicClick} style={{padding:'10px 15px',margin:'0px 0px 25px',cursor:'pointer'}}>🎤 Speak</button><br></br>

                    {result && (
                        <div>
                            <p>You said: {result}</p>
                            <p>{correct ? "Correct!" : "Incorrect. Try again!"}</p>
                        </div>
                    )}

                    <button onClick={nextWord} disabled={correct === null} style={{padding:'10px 15px',cursor:'pointer'}}>
                        Next Word
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Practice;