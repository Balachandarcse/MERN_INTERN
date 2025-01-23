import { useCallback, useState } from "react";
import NavBar from "../navBar";
import List from "./list";

const UseCallback = () => {
  var [num, setNum] = useState(0);
  var [dark, setDark] = useState(false);
  var styling = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  var getItems = useCallback(
    (inr) => {
      return [num + inr + 1, num + inr + 3, num + inr + 5];
    },
    [num]
  );
  return (
    <div>
      <NavBar />
      <div style={styling}>
        <button onClick={() => setDark((dark) => !dark)}>change theme</button>
        <h1>This is useCallback Example page</h1>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(parseInt(e.target.value));
          }}
        />
        
      </div>
      <List func={getItems}/>
    </div>
  );
};
export default UseCallback;