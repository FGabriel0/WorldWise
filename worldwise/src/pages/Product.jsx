import React from 'react'
import styles from "./Product.module.css"
import Navbar from '../components/navbar/Navbar'
import Img from "../assets/img-1.jpg"

const Product = () => {
  return (
    <main className={styles.product}>
    <Navbar />

    <section>
      <img
        src={Img}
        alt="person with dog overlooking mountain with sunset"
      />
      <div>
        <h2>About WorldWide.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloribus libero sunt expedita ratione iusto, magni, id sapiente
          sequi officiis et.
        </p>
      </div>
    </section>
  </main>
  )
}

export default Product