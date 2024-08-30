import React, { useState, useEffect } from 'react';
import './lesson.css';



const Lesson = () => {

    


    const [selectedText, setSelectedText] = useState('');
    const [indianEnglishVoice, setIndianEnglishVoice] = useState(null);

    const text = `
    1. PATRICK never did homework. “Too boring,” he said. He played hockey and basketball and Nintendo instead. His teachers told him, “Patrick! Do your homework or you won’t learn a thing.” And it’s true, sometimes he did feel like an ignoramus. But what could he do? He hated homework.
    
    2. Then one day he found his cat playing with a little doll and he grabbed it away. To his surprise it wasn’t a doll at all, but a man of the tiniest size. He had a little wool shirt with old-fashioned britches and a high tall hat much like a witch’s. He yelled, “Save me! Don’t give me back to that cat. I’ll grant you a wish, I promise you that.”

    3. Patrick couldn’t believe how lucky he was! Here was the answer to all of his problems. So he said, “Only if you do all my homework till the end of the semester, that’s 35 days. If you do a good enough job, I could even get A’s.”

    4. The little man’s face wrinkled like a dishcloth thrown in the hamper. He kicked his legs and doubled his fists and he grimaced and scowled and pursed his lips, “Oh, am I cursed! But I’ll do it.”
    `

    // const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            const indianVoice = voices.find(voice =>
                voice.lang === 'en-IN' || voice.name.toLowerCase().includes('india')
            );
            if (indianVoice) {
                setIndianEnglishVoice(indianVoice);
            }
        };

        // Load voices and add event listener for changes
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.onvoiceschanged = null; // Clean up the event listener
        };
    }, []);

    const handleTextSelection = () => {
        const selected = window.getSelection().toString();
        if (selected && indianEnglishVoice) {
            setSelectedText(selected);
            const utterance = new SpeechSynthesisUtterance(selected);
            utterance.voice = indianEnglishVoice;
            utterance.rate = 0.7; // Slow down the reading speed (0.1 to 1 range)
            window.speechSynthesis.speak(utterance);
        }
    };


    


    return (
        <div>
            <div style={{width:'80%',height:'auto',margin:"25px auto 25px -375px"}}>
                <a href='/unit1' style={{ textDecoration: 'none', color: "white", backgroundColor: 'black', padding: '5px 15px'}}>Back</a>
            </div>
            
            <section className='lesson-heading'>
                <div>
                    <h1>Lesson</h1>
                </div>
            </section>

            <section>
                <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3>Chapter-I</h3>
                    <h4>Title : Who Did Patrick’s Homework?</h4>
                    <p onMouseUp={handleTextSelection} style={{ textAlign: 'justify' }}>
                        {text.split(selectedText).map((part, index, array) => (
                            <span key={index}>
                                {part}
                                {index < array.length - 1 && <span className="highlight">{selectedText}</span>}
                            </span>
                        ))}
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Lesson;








// import React, { useState } from 'react';
// import './lesson.css';

// const Lesson = () => {

//     const [selectedText, setSelectedText] = useState('');
//     const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;
//     // const text = `మీరు ఈ పేజీకి ఏవైనా దిద్దుబాట్లు లేదా చేర్పులు చేయాలనుకుంటే లేదా పదబంధాల రికార్డింగ్‌లను అందించగలిగితే, దయచేసి నన్ను సంప్రదించండి .`
//     const handleTextSelection = () => {
//         const selected = window.getSelection().toString();
//         if (selected) {
//             setSelectedText(selected);
//             const utterance = new SpeechSynthesisUtterance(selected);
//             window.speechSynthesis.speak(utterance);
//         }
//     };

//     return (
//         <div>
//             <section className='lesson-heading'>
//                 <div>
//                     <h1>Lesson</h1>
//                 </div>
//             </section>

//             <section>
//                 <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
//                     <p onMouseUp={handleTextSelection} style={{ textAlign: 'justify' }}>
//                         {text.split(selectedText).map((part, index, array) => (
//                             <span key={index}>
//                                 {part}
//                                 {index < array.length - 1 && <span className="highlight">{selectedText}</span>}
//                             </span>
//                         ))}
//                     </p>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Lesson