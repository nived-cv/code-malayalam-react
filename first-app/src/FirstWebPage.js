import React from "react";
import './FirsWebPage.css';

function Header(){
    
    return (
        <div className="header-section">
            <ul className="navigation">
                <li>Home</li>
                <li>Usage</li>
                <li>Settings</li>
            </ul>
        </div>)
}

const sampleobject = [
    {
        "title":"The Rise of philadelphia",
        "description":"Philadelphia rose when political powers came for a conflict resolution",
        "isActive":false
    },
    {
        "title":"Gandhi",
        "description":"Gandhi is the father of India",
        "isActive":true
    }
]

const Tiles = ({props})=>{
    return (
    <div className='tiles'>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
        <div className="buttons">
            <button>{props.isActive?"active":"inactive"}</button>
        </div>
    </div>)
}

function ChildrenExample(props){
    
    return <center>hey {props.children}</center>
}

const WebApp = ()=>{

    return (
    <div>
        <Header/>
        {sampleobject.map((props)=>{
            return <Tiles props={props}/>
        })}

        <ChildrenExample>
            <h2>Poda</h2>
            <h2>Poda</h2>
            </ChildrenExample>

            <span>{React.Children.count(ChildrenExample.Children)}</span>

    </div>)
}

export default WebApp