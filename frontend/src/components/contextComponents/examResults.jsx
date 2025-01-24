import { useContext } from "react"
import { ThemeProvider } from "../functionalComponents/Hooks/usecontext"
 
const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return (
        <div>
            <h2>this is Results : SGPA:{res.sgpa} CGPA:{res.cgpa}</h2>
        </div>
    )
}
export default ExamResults