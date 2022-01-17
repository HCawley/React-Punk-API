import React, { useState, useEffect } from "react";
import styles from './App.module.scss';
import BeerCard from "./components/BeerCard/BeerCard";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      setBeers(data);
    })
  }, [])

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  return (
    <section className={styles.app}>
      <NavBar searchText={searchText} setSearchText={setSearchText} filteredBeers={matchingBeers}/>
      <BeerCard filteredBeers={matchingBeers}/>
    </section>
  );
}

export default App;
