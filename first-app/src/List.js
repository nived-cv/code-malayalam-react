import React,{ useState } from "react";
import ListItem from "./ListItem";

const List = ({props}) =>{

    let obj = props

    const filterSelection = (e) => {
        let value = e.target.value
        obj = props
    
        obj = obj.filter((ele)=>{
    
            if(value == 'all')
            return true
    
            if(value == 'active')
            return ele.isActive === true
    
            if(value == 'inactive')
            return ele.isActive === false
        })
    }
    
    return(<div>
            <select onChange = { filterSelection }>
                <option>all</option>
                <option>inactive</option>
                <option>active</option>
            </select>

            {obj.map((item) => {
                return <ListItem props = {item}/>
            })}
        </div>
)}

export default List