import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import style from "./AppLayout.module.css"

const AppLayout = () => {
  return (
    <div className={style.app}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout