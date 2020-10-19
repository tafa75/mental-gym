import React from 'react'

import Adivinanzas from "../Juego/Adivinanzas";
import Refranes from '../Juego/Refranes'


export const loadQuestions = async (url) => {
    //const url = `http://tripu.herokuapp.com/datos?juego=refranes&cantidad=10`;

    try {
        console.log("cargando")
        const res = await fetch(url);
        const results = await res.json();
        return convertQuestionsFromAPI(results);

    } catch (err) {
        console.error(err);
        return ["error", "tengo hambre"]
    }
};

const convertQuestionsFromAPI = (rawQuestions) => {
    return (Object.values(rawQuestions).map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.Question,
            answerChoices: [loadedQuestion.Incorrect1, loadedQuestion.Incorrect2, loadedQuestion.Incorrect3]
        };

        formattedQuestion.answer = Math.floor(Math.random() * 4);

        formattedQuestion.answerChoices.splice(
            formattedQuestion.answer,
            0,
            loadedQuestion.Answer
        );

        return formattedQuestion;
    }));
};
