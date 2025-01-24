import { createContext } from "react"
import Invigilator from "../../contextComponents/invigilator"
import NavBar from "../navBar"
export const ThemeProvider=createContext();
const Usecontext=()=>{
    return (
        <div>
            <NavBar/>
            <ThemeProvider.Provider value={{sgpa:9.6,cgpa:6.5}}>
            <h2>this is use-context example</h2>
            <Invigilator />
            </ThemeProvider.Provider>
        </div>
    )
}
export default Usecontext