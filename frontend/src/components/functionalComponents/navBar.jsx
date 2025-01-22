import { Link } from "react-router-dom"
import { useState } from "react"
import "../../css/nav.css"
const NavBar=()=>{
    var [dropdown,showdropdown]=useState(false)
    return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/home' className="link">Home</Link></li>
                        <li><Link to='/about' className="link">about</Link></li>
                        <div>
                            <span onMouseOver={()=>showdropdown(true)} onMouseLeave={()=>showdropdown(false)}>hooks</span>
                            {dropdown && (
                            <ul>
                                <li><Link to='/contact' className="link" >useState</Link></li>
                                <li><Link to='/gallery' className="link"  >gallery</Link></li>
                            </ul>)}
                        </div>
                        <li><Link to='/gallery' className="link">gallery</Link></li>
                        <li><Link to='/use-effect' className="link">use-effect</Link></li>
                        <li><Link to='/use-effect-api' className="link">use-effect-api</Link></li>
                        <li><Link to='/contact' className="link">contact</Link></li>
                        <li><Link to='/' className="link" >SignUp</Link></li>
                    </ul>
                </nav>
            </header>
    
    )
}
export default NavBar