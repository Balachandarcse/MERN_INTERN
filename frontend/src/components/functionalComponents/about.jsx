import { useState } from "react"

const About=()=>{
    var [text,setText]=useState("yooooo!");
    function handelText(event){
        setText(event.target.value)
    }
    return (
       
        <>
        <h1>hi</h1>
        <h2>this is about section</h2>
        {/* <textarea value={text} onChange={()=>setText()}/> */}
        {/* <textarea value={text} onChange={(event)=>setText(event.target.value)}/> */}
        <textarea value={text} onChange={handelText}/>
        <h2>the text is : {text}</h2>
        </>
    )
}

export default About