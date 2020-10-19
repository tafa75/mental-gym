import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import  FirebaseContext  from '../Firebase/FirebaseContext';
export default function SaveScoreForm({ score, scoreSaved }) {
    const [username, setUsername] = useState('');
    const firebase = useContext(FirebaseContext);

    const onUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    };

    const saveHighScore = (e) => {
        e.preventDefault();
        const record = {
            name: username,
            score
        };

        firebase.scores().push(record, () => {
            scoreSaved();
        });
    };

    return (
        <div className="container">
            <h1>Score: {score}</h1>
            <form onSubmit={saveHighScore}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="cool kid 123"
                    value={username}
                    onChange={onUsernameChange}
                />
                <button type="submit" className="btn" disabled={!username}>
                    Save
                </button>
            </form>
            <Link to="/" className="btn">
                Go Home
            </Link>
        </div>
    );
}