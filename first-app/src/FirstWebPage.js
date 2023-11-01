import React from "react";
import './FirsWebPage.css';
import Header from './Header'
import List from "./List";

const WebApp = ()=>{

    const obj = [
        {"title":"Nived","description":"nothing , go away !",
        "isActive":true},
        {"title":"Todays topics","description":"something , please stay !",
        "isActive":false},
        {"title":"killer whale","description":"Eats a lot of Fish",
        "isActive":true}
    ]
const fetchData = async() =>{

    const raw = await fetch('/data.json')
    let data = await raw.json()
    return data
}
    
    let fetchedData = [] || fetchData()
    //fetch('/data.json').then((data) => {return data.json()}).then((dat2 => {fetchedData = dat2}))
    
    return (
    <div>
        <Header/>
        <List props = { obj }/>

    </div>)
}

export default WebApp