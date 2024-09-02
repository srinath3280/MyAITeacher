import React, { useState, useEffect } from 'react';
import './practice.css';


const data = ["nintendo", "grabbed", "believe", "wrinkled", "grimaced"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Practice = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResult] = useState("");
    const [correct, setCorrect] = useState(null);


    const [sentences, setSentences] = useState([]);
    const [highlightedWord, setHighlightedWord] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const sentenceData = {
        "am": [
            "I am working on a React project.",
            "Am I doing this correctly?",
            "I am learning new things every day.",
            "Am I supposed to submit this by tomorrow?",
            "I am happy with the progress."
        ],
        "have": [
            "You have done a great job.",
            "They have completed their assignment.",
            "We have been working on this for hours.",
            "I have a lot of things to do.",
            "She have the ability to learn quickly."
        ],
        "had been": [
            "They had been waiting for hours.",
            "I had been planning to visit you.",
            "He had been working late last night.",
            "She had been studying hard for the exams.",
            "The car had been parked there for days."
        ],
        "change": [
            "Change is inevitable.",
            "She decided to change her hairstyle.",
            "They need to change the schedule.",
            "It's time for a change in leadership.",
            "The weather can change rapidly."
        ],
        "where": [
            "Where did you go?",
            "I don't know where they are.",
            "Can you tell me where the station is?",
            "Where are we meeting?",
            "I wonder where he got that idea."
        ]
    };


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



    const handleClick = (word) => {
        // Highlight the word in each sentence
        const highlightedSentences = sentenceData[word].map(sentence =>
            sentence.replace(new RegExp(`\\b${word}\\b`, 'gi'), `<strong>${word}</strong>`)
        );
        setSentences(highlightedSentences);
        setHighlightedWord(word);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };



    const speakSentence = (sentence) => {
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.pitch = 1;
        utterance.rate = 0.7;
        window.speechSynthesis.speak(utterance);
    };


    return (
        <div>
            <div style={{ width: '80%', height: 'auto', margin: "25px auto 25px -375px" }}>
                <a href='/unit1' style={{ textDecoration: 'none', color: "white", backgroundColor: 'black', padding: '5px 15px' }}>Back</a>
            </div>
            <section className='practice-heading'>
                <div>
                    <h2>Unit-I</h2>
                    <h4>Practice session</h4>
                </div>
            </section>
            <section className='practice-section1'>
                <h2 style={{ textDecoration: 'underline' }}>Part-I</h2>
                <div>
                    {Object.keys(sentenceData).map((word) => (
                        <button key={word} onClick={() => handleClick(word)} style={{ margin: '10px 20px', cursor: 'pointer' }}>
                            {word}
                        </button>
                    ))}

                    {showPopup && (
                        <div style={popupStyle}>
                            <h3>Sentences with "{highlightedWord}"</h3>
                            <ul>
                                {sentences.map((sentence, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: sentence }}
                                        onClick={() => speakSentence(sentence.replace(/<[^>]*>?/gm, ''))}
                                        style={{ cursor: 'pointer', margin: '10px 0', listStyleType: 'none', textAlign: 'start' }}
                                    />
                                ))}
                            </ul>
                            <button onClick={closePopup} style={{ margin: '25px', padding: '10px 15px', cursor: 'pointer' }}>Close</button>
                        </div>
                    )}
                </div>
            </section>

            <section className='practice-section2'>
                <h2 style={{ textDecoration: 'underline' }}>Part-II</h2>
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

            <section className='practice-section3'>
                <h2 style={{ textDecoration: 'underline' }}>Part-III</h2>
                <p style={{ color: 'red', fontSize: '18px' }}>
                    * Please read the word after the click on speak button
                </p>
                <div>
                    <h1>Word: {data[currentIndex]}</h1>
                    <button onClick={handleMicClick} style={{ padding: '10px 15px', margin: '0px 0px 25px', cursor: 'pointer' }}>🎤 Speak</button><br></br>

                    {result && (
                        <div>
                            <p>You said: {result}</p>
                            <p>{correct ? "Correct!" : "Incorrect. Try again!"}</p>
                        </div>
                    )}

                    <button onClick={nextWord} disabled={correct === null} style={{ padding: '10px 15px', cursor: 'pointer' }}>
                        Next Word
                    </button>
                </div>
            </section>
        </div>
    );
};

const popupStyle = {
    width: '600px',
    height: '300px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'lightgrey',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
};

export default Practice;