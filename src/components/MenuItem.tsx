import OrderContext from "../context/OrderContext";
import Item from "../models/Item";
import "./MenuItem.css";
import { useContext } from "react";

interface Props {
  dish: Item;
}

function MenuItem({ dish }: Props) {
  const { addItem } = useContext(OrderContext);
  return (
    <li className="MenuItem">
      <p>Name: {dish.name}</p>
      <p>Description:{dish.description} </p>
      <p>Calories: {dish.calories} </p>
      <p>Price: {dish.price} </p>
      <p>{dish.vegetarian ? "Vegetarian" : "Not Vegetarian"} </p>
      <button
        onClick={() => {
          addItem(dish);
        }}
      >
        Add To Order
      </button>
    </li>
  );
}

export default MenuItem;
