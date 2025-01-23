import { useEffect, useRef, useState } from "react"
import NavBar from "../navBar"

const UseRef=()=>{
    var [text,setText]=useState("")
    var prevRen=useRef()
    useEffect(()=>{
        prevRen.current=text
    })
    return (
        <div>
            <NavBar/>
            <h2>this is useRef example</h2>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <h3>the text is : {text}</h3>
            <h2>the previous Render is : {prevRen.current}</h2>
        </div>
    )
}
export default UseRef