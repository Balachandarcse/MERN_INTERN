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
                        <li><Link to='/contact' className="link">contact</Link></li>
                        <li><Link to='/' className="link">SignUp</Link></li>
                    </ul>
                </nav>
            </header>
    
    )
}
export default NavBar