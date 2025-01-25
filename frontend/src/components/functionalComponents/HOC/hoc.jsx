import NavBar from "../navBar";
import Button from "./Button";
import trackButtonComp from "./TrackButtonComp";
const HoC =()=>{
    const ButtonWithTracking=trackButtonComp(Button)
    return(
         <div>
            <NavBar/>
            <h3>this is example of higher order component</h3>
            <Button name="Login"/>
            <ButtonWithTracking name="login" info={{custId:"325213", pass:"asdfsl"}}/>
         </div>
    );
};
export default HoC;