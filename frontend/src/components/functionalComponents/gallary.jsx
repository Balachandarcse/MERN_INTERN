import NavBar from "./navBar"

function Gallery(props){
    return (
        <div>
            <NavBar/>
            <h1>this is gallery component</h1>
            <h2>this is a property text {props.a}</h2>
        </div>
    )
}
export default Gallery