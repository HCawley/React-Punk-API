import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
    const {searchText, setSearchText, filterBeers, handleHighABVBeers, handleBrewedBefore} = props;

    return (
        <div className={styles.nav}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} filterBeers={filterBeers}/>
        <input type="checkbox" className="checkbox" id="highABV" onClick={handleHighABVBeers}/>
        <label htmlFor="highABV">High ABV%</label>
        <input type="checkbox" id="brewedBefore" onClick={handleBrewedBefore}/>
        <label htmlFor="brewedBefore">Brewed before</label>
        </div>
    )
}

export default NavBar;
