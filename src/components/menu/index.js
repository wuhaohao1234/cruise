import React from 'react'
import './index.scss'
import dashboard from '@assets/images/dashboard.png'
export default function Menu() {
  return (
    <div className="menu" >
      <div className="icon" >
        <img src={dashboard} />
      </div>
      <div className="menu-text" >
        text
      </div>
    </div>
  )
}
