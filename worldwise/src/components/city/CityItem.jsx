import React from 'react'
import styles from "./CityItem.module.css"

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({city}) => {
  const {cityname, emoji,date} = city;
  return (
    <div>
      <li className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityname}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
      </li>
    </div>
  )
}

export default CityItem