import React from 'react'
import './ListItem.css'

const ListItem = ({props}) => {

  const changeState =(e)=>{
    props.isActive = !props.isActive
    e.target.style.backgroundColor == 'red' ? e.target.style.backgroundColor = 'green' : e.target.style.backgroundColor = 'red'
    e.target.innerText == 'active' ? e.target.innerText = 'inactive' : e.target.innerText = 'active'
  }

  return (
    <div className = "list-item">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button style = {{backgroundColor: props.isActive?'green':'red'}}
                    onClick = { changeState } >
            {props.isActive?'active':'inactive'}
        </button>
    </div>
  )
}

export default ListItem