import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from "./Princig.module.css"
import  img from "../assets/img-2.jpg"

const Princig = () => {
  return (
    <main className={styles.product}>
    <Navbar />

    <section>
      <div>
        <h2>
          Simple pricing.
          <br />
          Just $9/month.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
          labore mollitia iusto. Recusandae quos provident, laboriosam fugit
          voluptatem iste.
        </p>
      </div>
      <img src={img} alt="overview of a large city with skyscrapers" />
    </section>
  </main>
  )
}

export default Princig