import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import Product from './Product';
import classes from '../styles/list_styles.module.css'

const GenerationField = forwardRef((props, ref) =>{

    const [render, setToRender] = useState([])

    useImperativeHandle(ref, () => ({
        renderer(id) {
            let array = []
            for (let i = 5 * (id - 1); i < 5* (id - 1) + 5; i++){
                if(props.data.data[i] === undefined)
                    break
                else {
                    array.push(<Product data={props.data.data[i]} key={props.data.data[i].id}/>)
                }  
            }
            setToRender(array)
            return array
        }
    }))

    useEffect(() => {
        setToRender( () => {
                let array = []
                for (let i = 5 * (props.start - 1); i < 5* (props.start - 1) + 5; i++){
                    if(props.data.data[i] === undefined)
                        break
                    else {
                        array.push(<Product data={props.data.data[i]} key={props.data.data[i].id}/>)
                    }  
                }
                return array
        })
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={classes.container_top}>
            <div className={classes.item2}>ID</div>
            <div className={classes.item2}>NAME</div>
            <div className={classes.item2}>YEAR</div>
        </div>
            {render}
        </div>
    );
})

export default GenerationField;