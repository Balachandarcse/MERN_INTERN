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
                            <div className="dropDownContent">
                            <li><Link to='/react-lcm' className="link">React-life-cycle</Link></li>
                            <li><Link to='/usestate' className="link">useState</Link></li>
                            <li><Link to='/use-effect' className="link">use-effect</Link></li>
                            <li><Link to='/use-effect-api' className="link">use-effect-api</Link></li>
                            <li><Link to='/use-reducer' className="link">useReducer</Link></li>
                            <li><Link to='/use-effect-Image' className="link">use-effect-image</Link></li>
                            <li><Link to='/use-ref' className="link">use-ref</Link></li>
                            <li><Link to='/use-memo' className="link">use-memo</Link></li>
                            <li><Link to='/use-callback' className="link">use-callback</Link></li>
                            <li><Link to='/use-context' className="link">use-context</Link></li>
                            </div>
                        </li>
                        <li className="dropdown">
                            <span className="link">Memoization</span>
                            <div className="dropDownContent">
                            <li><Link to='/memo' className="link">React.Memo</Link></li>
                            <li><Link to='/lazy' className="link">Lazy,Suspense</Link></li>
                            </div>
                        </li>
                        <li className="dropdown">
                            <span className="link">custom Hooks</span>
                            <div className="dropDownContent">
                            <li><Link to='/customHook' className="link">Using localStorage ex</Link></li>
                            <li><Link to='/custom-useApi-hook' className="link">use-Api-hook</Link></li>
                            </div>
                        </li>
                        <li className="dropdown">
                            <span className="link">HOC</span>
                            <div className="dropDownContent">
                            <li><Link to='/hoc' className="link">higher order component eg</Link></li>
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