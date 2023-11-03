
import { useRef, useState, useLayoutEffect } from "react";

function useTooltip(){

    const [showTooltip,setShowTooltip] = useState(false)
    const refObj = useRef()
    const labelRef = useRef()

    useLayoutEffect(() =>{

        const width1 = labelRef.current.getBoundingClientRect().width
        const width2 = labelRef.current.getBoundingClientRect().width
      
        refObj.current.style.left = `${ (width2 - width1) / 2}px`
    },[showTooltip])

    return [showTooltip ,setShowTooltip ,labelRef ,refObj]
}

export {
    useTooltip
}