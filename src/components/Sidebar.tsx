import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import "./Sidebar.css";

function Sidebar() {
  let total = 0;
  const { order } = useContext(OrderContext);
  for (const dish of order) {
    total += dish.price;
  }

  return (
    <aside className="Sidebar">
      <ol>
        {order.map((dish) => {
          return (
            <li>
              {dish.name} - ${dish.price}
            </li>
          );
        })}
      </ol>
      <p>Total: ${total}</p>
    </aside>
  );
}

export default Sidebar;
