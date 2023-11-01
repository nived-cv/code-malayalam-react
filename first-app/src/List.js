import React,{ useEffect, useState } from "react";
import ListItem from "./ListItem";

const List = ({props}) =>{
    let [obj,setObj] = useState(props)

    useEffect(()=>{
        setObj(props)
    },[props])

    const filterSelection = (e) => {
        let value = e.target.value
        let filter_array = props
        filter_array = props.filter((ele)=>{
    
            if(value == 'all')
            return true
    
            if(value == 'active')
            return ele.isActive === true
    
            if(value == 'inactive')
            return ele.isActive === false
        })
        setObj(filter_array)
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