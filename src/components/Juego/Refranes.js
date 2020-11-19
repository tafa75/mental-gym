import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Juego/Question';
import { loadQuestions } from '../helper/QuestionHelper';
import Main from '../Main/Main';
import SaveScoreForm from '../CargarDatos/SaveScoreForm';

export default function Refranes({ history }) {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [done, setDone] = useState(false);
    const [questions, setQuestions] = useState([{ question: "Aquí aparecerán las preguntas", answerChoices: ["Aqui", "estarán", "las", "respuestas"], answer: 0 }])
    useEffect(() => {

        loadQuestions('http://mental-gym.herokuapp.com/datos?juego=refranes&cantidad=10')
            .then((data) => {

                setQuestions(questions => [...data])




                return "hola"
            })
    }, []);

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
                    {/* <Main score={score} questionNumber={questionNumber} /> */}
                    <h1>Refranes</h1>
                    <Question
                        question={currentQuestion}
                        changeQuestion={changeQuestion}
                    />

                    <Link to='/Main'><button className="btn">Volver</button></Link>
                </div>

            )}

            {done && <SaveScoreForm game="refranes" score={score} scoreSaved={scoreSaved} />}
        </>
    );
}