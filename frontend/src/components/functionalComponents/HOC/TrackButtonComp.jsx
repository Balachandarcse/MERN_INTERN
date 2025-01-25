const trackButtonComp = (Component) => {
    return (props) => {
      const handleClick = () => {
        console.log( props.trackingInfo);
      };
      return (
        <div onClick={handleClick}>
          CustomerID:
          <input type="text" />
          <br />
          Password:
          <input type="password" />
          <Component {...props} />
        </div>
      );
    };
  };
  export default trackButtonComp;