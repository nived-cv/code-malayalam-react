import React from 'react';

// const helloWorld =()=>{

//     let array1 = [1,2,3,4,5]
//     return array1
// }
// 
function ListItem(){

    return (<ul className="list1">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
    </ul>
    )
  }

  class Label extends React.Component{
    render(){
        return <label>label from class component</label>
    }
  }

const Mod1 = () =>{

    let array1 = [1,2,3,4,5]

    return (
    <div>
        
    {array1.map(ele => {return (<p> {ele} </p>) })}
    <ListItem/>
    <Label/>
    </div>)
}
export default Mod1