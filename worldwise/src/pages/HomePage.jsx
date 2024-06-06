import React from 'react'
import style from "./HomePage.module.css"
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main className={style.homepage}>
      <Navbar />
      <section>
        <h1>You travel the world
          <br/>
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks you footsteps into
          every city you can think
          of. Never forget you wonderfull experiences, and 
          show your friends how 
          you have wandered the world
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    
    </main>
  )
}

export default HomePage