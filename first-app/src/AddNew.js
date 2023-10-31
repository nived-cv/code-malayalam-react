import React, { useState } from 'react'

const AddNew = ({onCreate}) => {

    let [titleInput,setTitleInput] = useState(0)

    let changeValue = (e) =>{
        setTitleInput(e.target.value)
    }

  return (
    <div>
        <input value = {titleInput} onChange  = {changeValue}/>
        <button onClick ={()=>{onCreate(titleInput)}}>Create</button>
    </div>
  )
}

export default AddNew