import React, { useState, useEffect, useCallback } from 'react';
import Question from '../Juego/question';
import { loadQuestions } from '../helper/QuestionHelper';
import Main from '../Main/Main';
import SaveScoreForm from '../CargarDatos/SaveScoreForm';

export default function Juego({ history }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        loadQuestions()
            .then(setQuestions)
            .catch(console.error);
    }, []);

    fetch(
        'https://mental-gym.firebaseio.com/'
    )
    const scoreSaved = () => {
        history.push('/');
    };

    const changeQuestion = useCallback(
        (bonus = 0) => {
            if (questions.length === 0) {
                setDone(true);
                return setScore(score + bonus);
            }

            const randomQuestionIndex = Math.floor(
                Math.random() * questions.length
            );
            const currentQuestion = questions[randomQuestionIndex];
            const remainingQuestions = [...questions];
            remainingQuestions.splice(randomQuestionIndex, 1);

            setQuestions(remainingQuestions);
            setCurrentQuestion(currentQuestion);
            setLoading(false);
            setScore(score + bonus);
            setQuestionNumber(questionNumber + 1);
        },
        [
            score,
            questionNumber,
            questions,
            setQuestions,
            setLoading,
            setCurrentQuestion,
            setQuestionNumber
        ]
        
    );

    useEffect(() => {
        if (!currentQuestion && questions.length) {
            changeQuestion();
        }
    }, [currentQuestion, questions, changeQuestion]);

    return (
        <>
            {loading && !done && <div id="loader" />}

            {!loading && !done && currentQuestion && (
                <div>
                    <Main score={score} questionNumber={questionNumber} />
                    <h2 id="question">What is the answer to this questions?</h2>
            <div class="choice-container">
              <p class="choice-prefix">A</p>
              <p class="choice-text" data-number="1">Choice 1</p>
            </div>
                    <Question
                        question={currentQuestion}
                        changeQuestion={changeQuestion}
                    />
                </div>
            )}

            {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
        </>
    );
}