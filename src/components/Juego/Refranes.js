import React, { useState, useEffect, useCallback } from 'react';
import Question from '../Juego/Question';
import { loadQuestions } from '../helper/QuestionHelper';
import Main from '../Main/Main';
import SaveScoreForm from '../CargarDatos/SaveScoreForm';

export default function Refranes({ history }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [done, setDone] = useState(false);

    // useEffect(() => {
    //     loadQuestions()
    //         .then(setQuestions)
    //         .catch(console.error);
    // }, []);

    const scoreSaved = () => {
        history.push('/');
    };

    const questionLoader = () => {
        loadQuestions()
            .then((questions) => setQuestions)
            .catch(console.error);

        return (
            <div>
                        Question : "A barriga llena..."
                        Answer : " corazón contento."
                        Incorrect1 : " pocas palabras bastan."
                        Incorrect2 : " no hay pan duro."
                        Incorrect3 : " mangas verdes!"
            </div>

            );
    }

    const changeQuestion = useCallback(
        (bonus = 0) => {
            if (Question.length === 0) {
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
    //     if (!currentQuestion && Question.length) {
    //         changeQuestion();
    //        //console.log("aqui estan las preguntas")
    //     }
    //     else{
    //         console.log("no se han cargado las preguntas");
    //     }
    // }, [currentQuestion, questions, changeQuestion]);

    return (
        <>
            {loading && questionLoader()}
            {loading && !done && <div id="loader" />}

            {!loading && !done && currentQuestion && (
                <div>
                    <Main score={score} questionNumber={questionNumber} />
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