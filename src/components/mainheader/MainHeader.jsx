import React, { useContext } from 'react'

import './mainheader.scss'

import moon from '../../images/icon-moon.svg' 
import sun from '../../images/icon-sun.svg' 


import { ThemeContext } from '../../config/context'

const MainHeader = () => {
  const {darkTheme,setDarkTheme} = useContext(ThemeContext)

  const handleTheme =() =>{
    setDarkTheme(!darkTheme)
  }

  return (
    <div className='mainheader'>
        <div className="mainheader__logo">TODO</div>
        <div className='mainheader__icon' onClick={handleTheme}><img src={darkTheme ? sun : moon } alt="" /></div>
    </div>
  )
}

export default MainHeader