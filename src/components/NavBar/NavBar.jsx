import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
    const {searchText, setSearchText, filterBeers} = props;

    return (
        <div className={styles.nav}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} filterBeers={filterBeers}/>
        </div>
    )
}

export default NavBar;
