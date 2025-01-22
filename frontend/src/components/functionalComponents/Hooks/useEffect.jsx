import { useState ,useEffect} from "react"
import NavBar from "../navBar"

const UseEffect=()=>{
    var [text,setText]=useState("")
    useEffect(()=>{
        console.log(text)
    },[text])
    return (
        
        <div>
            <NavBar/>
            <h2>this is useeffect example</h2>
            <input type="number" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <h2>the text is {text}</h2>
        </div>
    )
}
export default UseEffect