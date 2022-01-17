import React from 'react'
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
    const {searchText, setSearchText} = props;

    return (
        <div className={styles.search}>
        <label htmlFor="search">search</label>
            <input id="search" type="text" value={searchText} onInput={(e) => setSearchText(e.target.value)}></input>
        </div>
    )
}

export default SearchBar
