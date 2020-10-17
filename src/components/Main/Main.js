import React from 'react';
import { Link } from 'react-router-dom';
import Juego from '../Juego/Juego'
import Refranes from '../Juego/Refranes'
export default function Home() {
    return (
        <>

            <Link to="/Refranes" className="btn">
                Refranes
            </Link>
            <Link to="/Juego" className="btn">
                Adivinanza
            </Link>
        </>
    );
}
    // useEffect(() => {

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
