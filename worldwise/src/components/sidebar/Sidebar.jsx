import React from 'react'
import Logo from '../Logo'
import styles from "./Sidebar.module.css"
import NavApp from "../navbar/NavApp"
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
    <Logo/>
    <NavApp />
    <Outlet />

    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  </div>
  )
}

export default Sidebar