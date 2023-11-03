import React, { useEffect, useRef, useState } from "react";
import './Tooltip.css'
import { useTooltip } from "./hooks/ourHooks";

const ToolTip = () =>{

    //const [refObj, labelRef, showTooltip, setShowTooltip ] = useTooltip()

    let [showTooltip, setShowTooltip] = useState(false)
    const handleMouseEnter = ()=> setShowTooltip(true)
    const handleMouseLeave = ()=> setShowTooltip(false)
    const refObj = useRef()
    const labelRef = useRef()

    useEffect(() =>{

        const width1 = refObj.current.getBoundingClientRect().width
        const width2 = labelRef.current.getBoundingClientRect().width
      
        refObj.current.style.left = `${ (width2 - width1) / 2}px`
    },[showTooltip])

    return(<div className = 'tooltip'>

        <span ref={ refObj } className = { showTooltip ? "show-tooltip" : "hide-tooltip"} > this is heading</span>
        <h2 className = 'sampleHeader' 
            onMouseEnter = { handleMouseEnter }
            onMouseLeave = { handleMouseLeave }
            ref = { labelRef }
        > Heading Element </h2>
    </div>)
}

export default ToolTip
// use layout effect is synchronous
// 