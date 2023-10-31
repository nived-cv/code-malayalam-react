import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import AddNew from "./AddNew";

const WebPage = () => {

    let [arrayObj,setarrayObj] = useState([
        {"title":"Nived","description":"nothing , go away !","isActive":true},
        {"title":"Todays topics","description":"something , please stay !","isActive":false},
        {"title":"killer whale","description":"Eats a lot of Fish","isActive":true}
    ])
    let currentSelect = []

    let addObj = (title) =>{
        arrayObj.push({"title":title,"description":"nil","isActive":false})
        console.log(arrayObj)
    }

    return (
        <div className = "main-container">
            <Header/>
            <AddNew onCreate={ addObj }/>
            <List props = {arrayObj}>
                <h2>de</h2>
                <h2>ee</h2>
            </List>

            {/* <span>{React.Children.count(List)}</span> */}
            <Header>
                <h1>sdjkfh</h1>
                <h2>lskdnf</h2>
                <h2>djhlkfasw</h2>
            </Header>
        </div>
    )}

export default WebPage