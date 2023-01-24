const Dessert = (props) => {
  return (
    <div>
      Dessert
      <div>{props.dessertType[0]}</div>
      <div>{props.dessertType[1]}</div>
      <div>{props.dessertType[2]}</div>
    </div>
  );
};

export default Dessert;
