import { useState } from "react";
import NavBar from "./navBar";

function Contact(){
    var [val,fun]=useState(78);//value and dispatch-funtions are two things given by useState()
    return (
        <div>
            <NavBar/>
            <h1>contact page</h1>
            <h2>the Number is {val}</h2>
            <button onClick={()=>fun(val+1)}>+</button>
        </div>
    )
}

export default Contact