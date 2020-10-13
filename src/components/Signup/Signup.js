import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import  FirebaseContext  from '../Firebase/FirebaseContext'

const Signup = (props) => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: '',
        sexo: '',
        edad: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push('/welcome');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                    {errorMsg}

                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Usuario</label>
                            </div>

                         <br></br>   <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                          <br></br>  <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">contraseña</label>
                            </div>

                           <br></br> <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            </div>
                         <br></br>   <div>
                                <input onChange={handleChange} value="enviar" type="submit" id="submit"></input>
                            </div>

                        </form>
                       <br></br><div className="linkContainer">
                         <br></br>   <Link className="simpleLink" to="/login">conectarse</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup