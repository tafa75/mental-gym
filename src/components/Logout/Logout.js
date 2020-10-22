import React, { useState, useEffect, useContext } from 'react'
import  FirebaseContext  from '../Firebase'
import 'firebaseui'
import ReactToolTip from 'react-tooltip'
import '../Logout/Logout.css'

const Logout = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {

            firebase.signoutUser();
        }

    }, [checked, firebase]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input 
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round" data-tip="Desconectarse"></span>
            </label>
            <ReactToolTip 
                place="left"
                effect="solid"
            />
        </div>
    )
}

export default Logout