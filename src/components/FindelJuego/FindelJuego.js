import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CargarDatos from '../CargarDatos/CargarDatos';
import Modal from '../Modal/Modal'




const FinDelJuego = React.forwardRef((props, ref) => {

    const {
        score, 
        maxQuestions, 
        percent,
        loadLevelQuestions
    } = props;

    const API_PUBLIC_KEY = 'AIzaSyB7-nruCZx_5pOTHUsGljptrw_YixUa42M'
 

    const [asked, setAsked] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [characterInfos, setCharacterInfos] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setAsked(ref.current)

    //     if ( localStorage.getItem('')) {
    //         const date = localStorage.getItem('');
    //         checkDataAge(date);
    //     }
    // }, [ref])

    const checkDataAge = date => {

        const today = Date.now();
        const timeDifference = today - date;

        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if ( daysDifference >= 15 ) {
            localStorage.clear();
            localStorage.setItem('marvelStorageDate', Date.now());
        }
    }

    const showModal = id => {
        setOpenModal(true);

        if ( localStorage.getItem(id) ) {

            setCharacterInfos(JSON.parse(localStorage.getItem(id)));
            setLoading(false);

        } else {

            axios
            .get(`https://mental-gym.firebaseio.com/`)
            .then( response => {
                
                setCharacterInfos(response.data);
                setLoading(false);

                localStorage.setItem(id, JSON.stringify(response.data));
                if ( !localStorage.getItem('marvelStorageDate') ) {
                    localStorage.setItem('marvelStorageDate', Date.now());
                }
                
            })
            .catch( err => console.log(err) )
        }
        
    }

    const hideModal = () => {
        setOpenModal(false);
        setLoading(true);
    }

    const capitalizeFirestletter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const averageGrade = maxQuestions / 2;

    
    const decision = score >= averageGrade ? (
        <Fragment>
        <div className="stepsBtnContainer">
        {
                        (
                <Fragment>
                    <p className="successMsg"></p>
                    <button 
                        className="btnResult success"
                        onClick={() => loadLevelQuestions()}
                        >
            
                    </button>
                </Fragment>
            )
            
            (
                <Fragment>
                   
                    <button 
                        className="btnResult gameOver"
                        onClick={() => loadLevelQuestions(0)}
                        >
                        Accueil
                    </button>
                </Fragment>
            )
        }
        </div>
        <div className="percentage">
            <div className="progressPercent">felicidades has conseguido: {percent} %</div>
            <div className="progressPercent">tu nota es: {score}/{maxQuestions}</div>
        </div>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div className="stepsBtnContainer">
                <p className="failureMsg">has fallados!</p>
            </div>

            <div className="percentage">
                <div className="progressPercent">felicidades has conseguido: {percent} %</div>
                <div className="progressPercent">tu nota es : {score}/{maxQuestions}</div>
            </div>
        </Fragment>
    )

    const questionAnswer = score >= averageGrade ? (
        asked.map( question => {
            return (
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td>
                        <button 
                           className="btnInfo"
                           onClick={ () => showModal(question.heroId)}
                        >
                        Infos
                        </button>
                    </td>
                </tr>
            )
        })
    )
    :
    (
        <tr>
            <td colSpan="3">
                <CargarDatos 
                    loadingMsg={"pas de réponses!"}
                    styling={{textAlign: 'center', color: 'red'}}
                />
            </td>
        </tr>
    )

    const resultInModal = !loading ? 
    (
        <Fragment>
            <div className="modalHeader">
                <h2>{characterInfos.data.results[0].name}</h2>
            </div>
            <div className="modalBody">
               <div className="comicImage">
                    <img 
                        src={characterInfos.data.results[0].thumbnail.path+'.'+characterInfos.data.results[0].thumbnail.extension} 
                        alt={characterInfos.data.results[0].name}
                    />

                    <p>{characterInfos.attributionText}</p>
               </div>
               <div className="comicDetails">
                    <h3>Description</h3>
                    {
                        characterInfos.data.results[0].description ?
                        <p>{characterInfos.data.results[0].description}</p>
                        : <p>Description indisponible ...</p>
                    }
                    <h3>Plus d'infos</h3>
                    {
                        characterInfos.data.results[0].urls && 
                        characterInfos.data.results[0].urls.map( (url, index) => {
                            return <a 
                                key={index}
                                href={url.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              {capitalizeFirestletter(url.type)}
                            </a>
                        })
                    }
               </div>
            </div>
            <div className="modalFooter">
                <button className="modalBtn" onClick={hideModal}>cerrar</button>
            </div>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div className="modalHeader">
                <h2> ''</h2>
            </div>
            <div className="modalBody">
                <CargarDatos />
            </div>
        </Fragment>
    )

    return (
        <Fragment>
        

            <hr />
                      <div className="answerContainer">
                <table className="answers">
                    
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>
        
        </Fragment>
    )
})

export default React.memo(FinDelJuego)