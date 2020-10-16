import React, { Fragment } from 'react'
import '../CargarDatos/Cargardatos.css';
const CargarDatos = (props) => {
    return (
        <Fragment>
            <div className="loader"></div>

            {/* <p style={styling}> */}
            {props.loadingMsg}
            {/* </p> */}
        </Fragment >
    )
}

export default CargarDatos
