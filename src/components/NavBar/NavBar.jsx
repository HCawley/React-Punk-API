import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
    const {searchText, setSearchText, filterBeers, handleHighABVBeers, handleBrewedBefore} = props;

    return (
        <div className={styles.nav}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} filterBeers={filterBeers}/>
        <div className={styles.checkboxes}>
        <label htmlFor="highABV">
        <input type="checkbox" className={styles.check} onClick={handleHighABVBeers}/>
        High ABV%</label>
        <label htmlFor="brewedBefore">
        <input type="checkbox" className={styles.check} onClick={handleBrewedBefore}/>
        Brewed before 2008</label>
        </div>
        </div>
    )
}

export default NavBar;
