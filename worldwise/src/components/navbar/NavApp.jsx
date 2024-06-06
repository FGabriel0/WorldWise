import React from 'react'
import style from "./NavApp.module.css"
import { NavLink } from 'react-router-dom'

const NavApp = () => {
  return (
    <nav className={style.nav}>
    <ul>
      <li>
        <NavLink to="cities">Cities</NavLink>
      </li>
      <li>
        <NavLink to="countries">Countries</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default NavApp