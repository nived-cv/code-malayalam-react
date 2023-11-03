
import React , { useState , useRef, useReducer } from 'react'

function valueReducer(state, action){
    switch (action.type){
        
        case 'color' : return {...state,color: action.payload == 'green' ? "blue" : "green"}
        case 'text' : return {...state, text : action.payload}

        default : return state
    }
}

const Usereducer = () =>{

    let [state, dispatch] = useReducer(valueReducer,{text:"text1",color:"green"})
    const refObj = useRef()

    const handleClick = () => dispatch({"type":"text",payload : refObj.current.value})
    const changeColor = () => dispatch({"type":"color",payload : refObj.current.style.backgroundColor})

    return (<div>

        <input ref = {refObj} style = {{backgroundColor : state.color}}/>
        <br/>
        <p> {state.text} </p>
        <button onClick = { handleClick }>Render</button>
        <button onClick = { changeColor }> Change Color</button>
    </div>)
}

export default Usereducer