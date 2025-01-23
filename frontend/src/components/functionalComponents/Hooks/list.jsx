import { useEffect, useState } from "react";

const List = ({ func }) => {
  var [numbers, setNums] = useState([]);
  useEffect(() => {
    setNums(func(40));
  }, [func]);
  return (
    <div>
      <h3>
        this is list of numbers:
      </h3>
      {numbers.map((number, index) => {
        return <h4 key={index}>{number}</h4>;
      })}
    </div>
  );
};
export default List;