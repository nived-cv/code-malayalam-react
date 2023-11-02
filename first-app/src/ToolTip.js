import React, { useRef, useState } from "react";

const ToolTip = () =>{

    let [tipActive,setTipActive] = useState(true)
    const refObj = useRef()

    const changeActiveState = () => {
        setTipActive(!tipActive)
        refObj.current.style.backgroundColor = tipActive ? 'green' : 'red'

    }

    const printDomElement = () =>{

        console.log(refObj.current)
    }

    return(<div className = 'tooltip'>

        <h2 className = 'sampleHeader' ref = { refObj } >Heading Element </h2>
        <button onClick = { changeActiveState }> Tooltip </button>
        <button onClick = { printDomElement}> DOM</button>
    </div>)
}

export default ToolTip
//eddeededed edede