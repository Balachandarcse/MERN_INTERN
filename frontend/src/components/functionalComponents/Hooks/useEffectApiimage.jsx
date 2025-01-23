import { useState ,useEffect} from "react"
import NavBar from "../navBar"
import axios from 'axios'
const UseEffectApiImage=()=>{
   
    var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            
            setPost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        
        <div>
            <NavBar/>
            <h2>this is useeffectApi for imagesexample</h2>
            <h2>this is content form image API: </h2>
            <h3>
                <ol className="grid">
                {post.map((element)=>(
                    <div className="items-of-grid">
                    <li  key={element.id} ><img src={element.image} alt="" /></li>
                    </div>
                ))}
                </ol>
                
            </h3>
            
        </div>
    )
}
export default UseEffectApiImage