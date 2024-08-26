import { useSelector } from "react-redux";
import "./Cart.css";
import ItemList from "../ResturantMenu/ItemList";

const CartComponent = () => {
  const cartStoreItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart-page">
      <ItemList itemList={cartStoreItems} btn="delete" />
    </div>
  );
};

export default CartComponent;
