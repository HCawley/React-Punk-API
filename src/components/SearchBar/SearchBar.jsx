import React from 'react'
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const {searchText, setSearchText} = props;

    return (
        <div className={styles.search}>
        <h1 className={styles.navTitle}>Punk API</h1>
        <div className={styles.searchBar}>
            <input id="search" type="text" placeholder="Search..."value={searchText} onInput={(e) => setSearchText(e.target.value)}/>
        </div>
        </div>
    )
}

export default SearchBar
