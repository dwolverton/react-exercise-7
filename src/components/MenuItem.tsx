import Item from "../models/Item";
import "./MenuItem.css";

interface Props {
  dish: Item
}

function MenuItem({dish}: Props) {

  return (
    <li className="MenuItem">
      <p>Name: {dish.name}</p>
      <p>Description:{dish.description} </p>
      <p>Calories: {dish.calories} </p>
      <p>Price: {dish.price} </p>
      <p>{dish.vegetarian ? "Vegetarian" : "Not Vegetarian"} </p>
      <button>Add To Order</button>
    </li>
  );
}

export default MenuItem;