import React from 'react'
import styles from "./BeerCard.module.scss";
import Card from '../Card';


const BeerCard = (props) => {
    const { filteredBeers } = props

    return (
        <section className={styles.BeerCard}>
        {filteredBeers.map(beer => <Card beer={beer} key={beer.id}/>)}
        </section>
    )
}

export default BeerCard
