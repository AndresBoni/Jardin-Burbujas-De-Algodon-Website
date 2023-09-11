import React from 'react'

const NoticiasCards = ({img, title}) => {
  return (
    <div className="card-noticia d-flex flex-column p-0">
            <img src={img} alt="imagen noticia 1" className="w-100" />
            <span className="d-flex justify-self-center">
              {title}
            </span>
          </div>
  )
}

export default NoticiasCards