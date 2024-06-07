import React from 'react'
import CountryItem from './CountryItem';
import styles from "./CountryList.module.css"
import Message from '../Message';
import Spinner from '../Spinner';
import { useCities } from '../../context/CitiesContext';

const CountryList = () => {
  const {cities, isLoading} = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
      return (
        <Message message="Add your first city by clicking on a city on the map" />
      );

      const coutries = cities.reduce((arr,city) => {
        if(!arr.map(el=>el.city).includes(city.country))
            return[...arr,{country: city.country,emoji:city.emoji}];
        else return arr ;
    },[]);
  
    return (
      <ul className={styles.countryList}>
        {coutries.map((country) => (
          <CountryItem country={country}/>
        ))}
      </ul>
    );
  }

export default CountryList