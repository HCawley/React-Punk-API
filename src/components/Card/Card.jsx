import React from 'react'
import styles from "./Card.module.scss";

const Card = (props) => {
    const {name, image_url, tagline, description, first_brewed, abv } = props.beer;

    return (
        <div className={styles.card}>
            <img src={image_url}/>
            <h1>{name}</h1>
            <h3>"{tagline}"</h3>
            <p>{description}</p>
            <p>First brewed: {first_brewed}</p>
            <p>{abv}%</p>
        </div>
    )
}

export default Card
