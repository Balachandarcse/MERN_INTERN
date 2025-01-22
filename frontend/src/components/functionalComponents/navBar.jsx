import { Link } from "react-router-dom"
import "../../css/nav.css"
const NavBar=()=>{
    return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/home' className="link">Home</Link></li>
                        <li><Link to='/about' className="link">about</Link></li>
                        <li><Link to='/gallery' className="link">gallery</Link></li>
                        <li className="dropdown">
                            <span className="link">Hooks</span>
                            <div className="hooks">
                            <li><Link to='/usestate' className="link">useState</Link></li>
                            <li><Link to='/use-effect' className="link">use-effect</Link></li>
                            <li><Link to='/use-effect-api' className="link">use-effect-api</Link></li>
                            <li><Link to='/use-reducer' className="link">useReducer</Link></li>
                            </div>
                        </li>
                        
                        <li><Link to='/contact' className="link">contact</Link></li>
                        <li><Link to='/' className="link" >SignUp</Link></li>
                        
                    </ul>
                </nav>
            </header>
    
    )
}
export default NavBar