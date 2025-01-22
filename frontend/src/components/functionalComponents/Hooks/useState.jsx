import { useState } from "react"

var UseState= ()=>{
    var initialVal=10
    var [a,b]=useState(initialVal)
    return (
        <div>
            <h1>this is example for useState</h1>
            <h2>this is the value : {a}</h2>
            <button onClick={()=>{
                b(a++)
            }}>increament</button>
            <button onKeyDown={()=>{
                b(a--)
            }}>increament</button>
            <button onDoubleClick={()=>{
                b(initialVal)
            }}>increament</button>
        </div>

    )
}

export default UseState