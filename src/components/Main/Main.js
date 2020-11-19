import React from 'react';
import { Link } from 'react-router-dom';
import Adivinanzas from '../Juego/Adivinanzas'
import Refranes from '../Juego/Refranes'
import '../Main/Main.css'
import { UserConsumer } from "../App/contextUser"
import firebase from "firebase/app";
export default function Home() {

    function getScores(param) {
        let db = firebase.firestore();
        let scoreRef = db.collection("game");
        let userScores = []
        let query = scoreRef.where("id", "==", "D3yT4ie1bMQ4rFd2SnbWuM5Ragz1").get().then(snapshot => {
            if (snapshot.empty) {
                console.log("ningun resultado");
                return;
            }
            snapshot.forEach(doc => userScores.push(doc)) // mete al MAP
        })
            .catch(err => { console.log(err) })




    }

    return (

        <UserConsumer>
            {(value) =>
                (
                    <>
                        <h1>Bienvenido Tafa!!!</h1>

                        <img src="./media/Logo-1.png" alt="logo" />
                        <br />
                        {getScores(value.contexto.id)}
                        <br />
                        <Link to="/" className="btn">
                            Logout
                        </Link>

                        <Link to="/Refranes" className="btn">
                            Refranes
                        </Link>
                        <Link to="/Adivinanzas" className="btn">
                            Adivinanzas
                        </Link>
                        <Link to="/Gentilicios" className="btn">
                           Gentilicios
                        </Link>
                        <Link to="/Provincias" className="btn">
                            Provincias
                        </Link>
                    </>
                )
            }



        </UserConsumer >
    );
}

// <button onClick={Refranes}>Refranes</button><hr></hr>

// <button onClick={Juego}>Adivinanzas</button>
//     // useEffect(() => {

    //     let listener = firebase.auth.onAuthStateChanged(user => {
    //         user ? setUserSession(user) : props.history.push('/');
    //     })

    //     if (!!userSession) {
    //         firebase.user(userSession.uid)
    //             .get()
    //             .then(doc => {
    //                 if (doc && doc.exists) {
    //                     const myData = doc.data();
    //                     setUserData(myData)
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     }

    //     return () => {
    //         listener()
    //     };
    // }, [userSession, firebase, props.history])

    //     return userSession !== null  ?(
    //         <CargarDatos
    //             loadingMsg={"Tienes que loggearte  ..."}

    //         />
    //     ) :
    //      (

    //             <div className="quiz-bg">
    //                 <div className="container">
    //                     <h1>Hola</h1>

    //                      <Logout />,
    //                     <Juego userData={userData} /> 
    //                     <Refranes userData={userData} />
    //                 </div>
    //             </div>

    //         )
    // }


//export default Main
