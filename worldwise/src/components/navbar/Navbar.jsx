import React from 'react'
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <Logo/>
        <ul>
            <li>
                <NavLink to="/princig">Princig</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
            <li>
            <NavLink to="/login" className={style.ctaLink}>
                Login
            </NavLink>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar