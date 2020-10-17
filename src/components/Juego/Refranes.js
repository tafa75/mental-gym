import React, { useState, useEffect, useCallback } from 'react';
import Refranes from '../Juego/Refranes';
import Home from '../Home/Home';
import CargarDatos from '../CargarDatos/SaveScoreForm';


export default function Main ({ history }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [done, setDone] = useState(false);

    // useEffect(() => {
    //     CargarDatos()
    //         .then(setQuestions)
    //         .catch(console.error);
    // }, []);

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

    // useEffect(() => {
    //     if (!currentQuestion && questions.length) {
    //         changeQuestion();
    //     }
    // }, [currentQuestion, questions, changeQuestion]);

    return (
        <>
            {loading && !done && <div id="loader" />}

            {!loading && !done && currentQuestion && (
                <div>
                    <Main score={score} questionNumber={questionNumber} />
                    <Refranes
                        question={currentQuestion}
                        changeQuestion={changeQuestion}
                    />
                </div>
            )}

        </>
    );
}