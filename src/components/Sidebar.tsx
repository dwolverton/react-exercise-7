import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import MenuItem from "./MenuItem";
import "./Sidebar.css";

function Sidebar() {
  const { order } = useContext(OrderContext);
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
    </aside>
  );
}

export default Sidebar;
