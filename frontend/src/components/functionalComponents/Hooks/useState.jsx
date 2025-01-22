import { useState } from "react"
import NavBar from "../navBar"

var UseState= ()=>{
    var initialVal=10
    var [num,setNum]=useState(initialVal)
    return (
        <div>
            <NavBar/>
            <h1>this is example for useState</h1>
            <h2>this is the value : {num}</h2>
            <button onClick={()=>{
                setNum(num++)
            }}>increment</button>
            <button onKeyDown={()=>{
                setNum(num--)
            }}>decrement</button>
            <button onDoubleClick={()=>{
                setNum(initialVal)
            }}>reset</button>
        </div>

    )
}

export default UseState