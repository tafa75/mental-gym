import React , { useState, useContext, useEffect }from 'react'
import {Link} from 'react-router-dom'
import  FirebaseContext  from '../Firebase'
import Juego from '../Juego/Juego'
import Logout from '../Logout/Logout'
import CargarDatos from '../CargarDatos/CargarDatos'

const Main = props => {
    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        if (!!userSession) {
            firebase.user(userSession.uid)
            .get()
            .then( doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData)
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return () => {
            listener()
        };
    }, [userSession, firebase, props.history])

    return userSession === null ? (
        <CargarDatos 
            loadingMsg={"Authentification ..."}
            styling={{textAlign: 'center', color: '#FFFFFF'}}
        />
    ) : (
        <div className="quiz-bg">
            <div className="container">
                <Logout />
                <Juego userData={userData}/>
            </div>
        </div>
    )
}

export default Main
