import "./App.css";
import Coffee from "./Coffee";
import Dessert from "./Dessert";
import Tea from "./Tea";

function App() {
  return (
    <div>
      Boba Shop
      <Coffee coffeeType={["Iced Americano", "Iced Latte", "Cold Brew"]} />
      <Tea teaType={["Passionfruit", "Strawberry Refresher"]} />
      <Dessert dessertType={["Ice Cream", "Pastry", "Sandwich"]} />
    </div>
  );
}

export default App;
