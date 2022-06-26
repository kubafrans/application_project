import React from 'react';
import classes from '../styles/list_styles.module.css'

function SelectedProduct(props) {

    const style = {
        backgroundColor : props.toRender.data.color
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <div className={classes.container_top}>
                    <div className={classes.item2}>ID</div>
                    <div className={classes.item2}>NAME</div>
                    <div className={classes.item2}>YEAR</div>
                </div>
            </div>
            <div className={classes.container} style={style}>
                <div className={classes.item2}>{props.toRender.data.id}</div>
                <div className={classes.item}>{props.toRender.data.name}</div>
                <div className={classes.item}>{props.toRender.data.year}</div>
            </div>
        </div>
    );
}

export default SelectedProduct;