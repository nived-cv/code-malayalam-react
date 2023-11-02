import React,{ useState,useEffect } from 'react'
import './Counter.css'

const Counter = () => {

    const increment = ()=> setCount(++count)
    const decrement = ()=> setCount(--count)

    let [count,setCount] = useState(0)
   
    useEffect(() =>{
        const timer = setTimeout(() =>{
            alert('boom')
        },1000 * count)
        return () => { clearInterval(timer)}
    },[count])

    return(<div className = 'counter'>
        <button onClick = { increment }>Increment</button>
        <span className = 'count_value'>{count}</span>
        <button onClick = { decrement }>Decrement</button>
    </div>)
}
export default Counter
// 