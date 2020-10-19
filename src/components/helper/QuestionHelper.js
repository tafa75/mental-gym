import React from 'react'

import Adivinanzas from "../Juego/Adivinanzas";
import Refranes from '../Juego/Refranes'


export const loadQuestions = async (

) => {
    const url = `https://tripu.herokuapp.com/datos?juego=${Refranes},${Adivinanzas}/cantida=10`;

    try {
        const res = await fetch(url);
        const { results } = await res.json();
        return convertQuestionsFromAPI(results);
    } catch (err) {
        console.error(err);
    }
};

const convertQuestionsFromAPI = (rawQuestions) => {
    return rawQuestions.map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.question,
            answerChoices: [...loadedQuestion.incorrect_answers]
        };

        formattedQuestion.answer = Math.floor(Math.random() * 4);

        formattedQuestion.answerChoices.splice(
            formattedQuestion.answer,
            0,
            loadedQuestion.correct_answer
        );

        return formattedQuestion;
    });
};
