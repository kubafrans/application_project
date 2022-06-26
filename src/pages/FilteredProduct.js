import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SelectedProduct from '../components/SelectedProduct';
import {TailSpin} from  'react-loader-spinner'
import NoItem from '../components/NoItem';
import classes from '../styles/list_styles.module.css'

function FilteredProduct(props) {

    const {sort} = useParams()
    const {id} = useParams()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState("")
    const [value, setValue] = useState('');
    const [isError, setError] = useState(false)

    useEffect(() => {
        fetch("https://reqres.in/api/products?id=" + sort)
        .then(function(res) {
            if (!res.ok) { 
                setError(true)
                setIsLoading(false)
            } else {
                return res   
            }
        })
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setIsLoading(false)
        })
        .catch((error) => {})
    },[])

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    }

    const change = () => {
        if(value !== ''){
            navigate('/' + id + '/' + value)
            window.location.reload(false)
        }
        else
            navigate('/' + id)
    }

    return (
        <div>
            <div className={classes.sort_module}>
                <label>Sort by ID:</label><input type={"text"} value={value} onChange={handleChange} /><button onClick={change}>search</button>
            </div>
            {isLoading ? <div className={classes.center}><TailSpin width="50px" height="50px" color='lightblue' alignSelf='center'/> </div> : 
            isError ? <NoItem/> : <SelectedProduct toRender={data}/>}
        </div>
    );
}

export default FilteredProduct;