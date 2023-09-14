import React from 'react'

const EquipoCard = ({img, nombre, rol}) => {
  return (
    <div className="col d-flex flex-column p-4 text-center">
          <img
            src={img}
            className="img-fluid rounded-circle p-4"
            alt={`imagen de docente ${nombre}`}
          />
          <span>{nombre}</span>
          <span>{rol}</span>
        </div>
  )
}

export default EquipoCard