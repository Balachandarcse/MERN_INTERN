import { useState ,useEffect} from "react"
import NavBar from "../navBar"
import axios from 'axios'
const UseEffectApi=()=>{
   
    var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>{
            
            setPost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        
        <div>
            <NavBar/>
            <h2>this is useeffectApi example</h2>
            <h2>this is content form JSONPlaceholder API: </h2>
            <h3>
                <ol>
                {post.map((element)=>(
                    <li key={element.id} >{element.title}</li>
                ))}
                </ol>
                
            </h3>
            
        </div>
    )
}
export default UseEffectApi