import React, { useEffect,useState } from "react";
import './FirsWebPage.css';
import Header from './Header'
import List from "./List";
import AddNew from "./AddNew";

const WebApp = ()=>{

    const fetchData = async() =>{

        const raw = await fetch('/data.json')
        let data = await raw.json()
        return data
    }

    const createNewEL = (text) =>{
        console.log(text)
    }
    
    let [data,setData] = useState([])

    useEffect(async ()=>{   
    
        const data = await fetchData()
        if(data)
        setData(data)
    },[])

    return (
    <div>
        <Header/>
        <AddNew onCreate={ createNewEL }/>
        <List props={data}/>

    </div>)
}

export default WebApp