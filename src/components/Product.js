import React from 'react';
import classes from '../styles/list_styles.module.css'


function Product(props) {

    const style = {
        backgroundColor : props.data.color
    }

    return (
        <div  className={classes.container} style={style}>
            <div className={classes.item2}>{props.data.id}</div>
            <div className={classes.item}>{props.data.name}</div>
            <div className={classes.item}>{props.data.year}</div>
        </div>
    );
}

export default Product;