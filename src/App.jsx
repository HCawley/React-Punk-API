import React, { useState, useEffect } from "react";
import styles from './App.module.scss';
import BeerCard from "./components/BeerCard/BeerCard";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [beers, setBeers] = useState([]);
  const [ABV, setABV] = useState(false);
  const [brewed, setBrewed] = useState(false);

  const beersHighABV = ABV ? "?abv_gt=7" : ""
  const brewedBefore = brewed ? "?brewed_before=01-2008" : ""

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers${beersHighABV}${brewedBefore}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      setBeers(data);
    })
  }, [beersHighABV, brewedBefore])

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  const handleHighABVBeers = () => {
    setABV(!ABV)
  }

  const handleBrewedBefore = () => {
    setBrewed(!brewed)
  }

  return (
    <section className={styles.app}>
      <NavBar searchText={searchText} setSearchText={setSearchText} filteredBeers={matchingBeers} handleHighABVBeers={handleHighABVBeers} ABV={ABV}
      handleBrewedBefore={handleBrewedBefore} brewed={brewed}/>
      <BeerCard filteredBeers={matchingBeers}/>
    </section>
  );
}

export default App;
