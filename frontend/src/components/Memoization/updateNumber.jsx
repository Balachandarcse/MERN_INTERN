import { memo } from "react"
const UpdateNum=({val})=>{
    return (
        <div>

            <h2>update number is {val}</h2>
        </div>
    )
}
export default memo(UpdateNum)