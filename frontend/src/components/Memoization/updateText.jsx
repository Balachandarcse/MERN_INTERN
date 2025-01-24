import { memo } from "react"
const UpdateText=({val})=>{
    return (
        <div>
            <h2>update number2 is: {val}</h2>
        </div>
    )
}
export default memo(UpdateText)