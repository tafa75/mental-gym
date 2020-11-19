import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CargarDatos/SaveScoreForm.css'
import { UserConsumer } from "../App/contextUser"
import "firebase/firestore"
import "firebase/auth"; import firebase from "firebase/app"


export default function SaveScoreForm({ score, game }) {
    const [saved, setSaved] = useState(false);
    const [username, setUsername] = useState('');

    const onScoreChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const saveHighScore = (e) => {


    }

    const save = (id, score, game) => {

        const gameData = {
            "game_time": new Date().toLocaleString(),
            "id": id,
            "score": score,
            "game": game,

        }

        //Llama a Firestore y guarda en "game"
        firebase.firestore()
            .collection("game")
            .add(gameData)
            .then(data => {// guardado
                setSaved(true)
                console.log(saved)
                console.log(data)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log("hola error")
            });

    }








    return (

        <div className="container">
            <h1>Score de Tafa: {score}</h1>
            <h1>{game}</h1>
            <UserConsumer>
                {(value) =>
                    (
                        <button className="btn" onClick={() => save(value.contexto.id, score, game)}>Guardar</button>
                    )
                }
            </UserConsumer >
            {saved === true ? <p>Has guardado tu puntuacion</p> : <p>No has guardado tu puntucion</p>}


            <img src="./media/Logo-1.png" alt="logo" />

            <Link to="/Main" className="btn">
                pagina principal
                    </Link>
            <Link to="/"><button className="btn">Logout</button></Link>
        </div>






    );
}