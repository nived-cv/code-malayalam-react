import React from 'react'
import './ListItem.css'

const ListItem = ({props}) => {
  return (
    <div className = "list-item">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button style = {{backgroundColor: props.isActive?'green':'red'}}>
            {props.isActive?'active':'inactive'}
        </button>
    </div>
  )
}

export default ListItem