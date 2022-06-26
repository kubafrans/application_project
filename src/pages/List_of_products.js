import React from 'react';
import {useState, useEffect, useRef} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import {TailSpin} from  'react-loader-spinner'
import GenerationField from '../components/GenerationField';
import classes from '../styles/list_styles.module.css'

function List_of_products() {

    const {id} = useParams()
    const childRef = useRef()
    const navigate = useNavigate();
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [maxPage, setMaxPage] = useState(1)
    const [currentId, setId] = useState(id)
    const [value, setValue] = useState('');
    
    useEffect(() => {
        fetch("https://reqres.in/api/products?page=1&per_page=12")
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setIsLoading(false)
            if (json.data.length % 5 === 0)
                setMaxPage(parseInt(json.data.length / 5))
            else
                setMaxPage(parseInt(json.data.length / 5 + 1))
            
        }
        )
    },[])

    const next = () => {
        if (currentId < maxPage){
            let n = (parseInt(currentId) + 1)
            navigate('/' + n)
            setId(n)
            childRef.current.renderer(n)
        }
        else {
            navigate('/1')
            setId(1)
            childRef.current.renderer(1)
        }
    }

    const prev = () => {
        if (currentId > 1) {
            let n = (parseInt(currentId) - 1)
            navigate('/' + n)
            setId(parseInt(n))
            childRef.current.renderer(n)
        }
        else {
            navigate('/' + maxPage)
            setId(maxPage)
            childRef.current.renderer(maxPage)
        }
        
    }

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    }

    const change = () => {
        console.log(data.data[value - 1])
        navigate('/' + currentId + '/' + value)
    }

    return (
        <div>
            <div className={classes.sort_module}>
                <label>Sort by ID: </label><input type={"text"} value={value} onChange={handleChange} placeholder="enter id to search..."/><button onClick={change}>search</button>
            </div>
                {isLoading? <div className={classes.center}><TailSpin width="50px" height="50px" color='lightblue' alignSelf='center'/> </div>: <GenerationField start={parseInt(currentId)} data={data} ref={childRef}/>}
            <div className={classes.sort_module}>
                <button onClick={prev} className={classes.button}>PREV</button>
                <button onClick={next} className={classes.button}>NEXT</button>
            </div>
            
        </div>
    );
}

export default List_of_products;