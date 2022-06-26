import React from 'react';
import classes from '../styles/list_styles.module.css'

function NoItem(props) {
    return (
        <div className={classes.not_found}>
            ITEM NOT FOUND
        </div>
    );
}

export default NoItem;