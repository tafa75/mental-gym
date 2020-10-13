import React, { Fragment } from 'react'

const CargarDatos = ({ CargarDatos, styling }) => {
    return (
        <Fragment>
            <div className="loader"></div>
            <p style={styling}>
                { CargarDatos }
            </p>
        </Fragment>
    )
}

export default CargarDatos
