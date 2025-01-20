import { useState } from "react";

function Contact(){
    var [val,fun]=useState(78);
    return (
        <div>
            <h1>contact page</h1>
            <h2>the Number is {val}</h2>
            <button onClick={()=>fun(val+1)}>+</button>
        </div>
    )
}

export default Contact