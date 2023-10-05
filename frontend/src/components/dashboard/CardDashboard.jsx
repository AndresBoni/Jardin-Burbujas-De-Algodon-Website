import React from 'react'
import './styles/CardDashboard.css'

const CardDashboard = ({title, icon}) => {
  return (
    <div className='card-dashboard'>
        <span>{title}</span>
        <img src={icon} alt="" className='card-dashboard-icon' />
    </div>
  )
}

export default CardDashboard