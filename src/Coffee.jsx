const Coffee = (props) => {
  return (
    <div>
      Coffee
      <div>{props.coffeeType[0]}</div>
      <div>{props.coffeeType[1]}</div>
      <div>{props.coffeeType[2]}</div>
    </div>
  );
};

export default Coffee;
