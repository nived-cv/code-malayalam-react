import React, { createContext, useEffect,useState } from "react";
import './FirsWebPage.css';
import Header from './Header'
import List from "./List";
import AddNew from "./AddNew";
import Counter from "./Counter";
import ToolTip from "./ToolTip";
import Usereducer from "./Usereducer"

const MyContext = createContext()

const WebApp = ()=>{

    let [data,setData] = useState([])
    const fetchData = async() =>{

        const raw = await fetch('/data.json')
        let data = await raw.json()
        return data
    }

    const createNewEL = (text) =>{
        const new_obj = {"title":text,"description":"new description","isActive":false}
        setData([...data,new_obj])
    }
    
    useEffect(()=>{   

        fetchData().then((data)=>setData(data))
    },[])

    return (
    <div>
        <Header/>
        <AddNew onCreate={ createNewEL }/>
        <MyContext.Provider value={data}>
            <List props={data}/>
        </MyContext.Provider>        
        <Counter/>
        <ToolTip />
        <Usereducer />
    </div>)
}

export default WebApp
export { 
    MyContext 
}
//