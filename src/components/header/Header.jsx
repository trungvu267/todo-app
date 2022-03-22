import React, { useContext } from 'react'

import './header.scss'
import lightBg from '../../images/bg-desktop-light.jpg'
import darkBg from '../../images/bg-desktop-dark.jpg'

import {ThemeContext} from '../../config/context'
const Header = () => {
  const {darkTheme} = useContext(ThemeContext)
  return (
    <div className='header' style={{
    backgroundImage: `url(${darkTheme ? darkBg: lightBg })`,

    }}></div>
  )
}

export default Header