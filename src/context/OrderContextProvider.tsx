import { ReactNode, useState } from "react";
import Item from "../models/Item";
import OrderContext from "./OrderContext";

interface Props {
 children: ReactNode;
}

const OrderContextProvider = ({ children }: Props) => {
 const [order, setOrder] = useState<Item[]>([]);
 const addItem = (item: Item): void => {
   setOrder((prev) => [...prev, item]);
 };
 const removeItem = (id: string): void => {
   const index: number = order.findIndex((item) => item.id === id);
   setOrder((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
 };
 return (
   <OrderContext.Provider
     value={{ order, addItem, removeItem }}
   >
     {children}
   </OrderContext.Provider>
 );
};

export default OrderContextProvider;