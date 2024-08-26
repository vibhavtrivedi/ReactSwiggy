import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import ItemList from "../ResturantMenu/ItemList";
import { deleteItems } from "../../utils/cartSlice";

const CartComponent = () => {
  const cartStoreItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("d", dispatch);
  const handleClearCart = () => {
    dispatch(deleteItems());
  }
  return (
    <div className="cart-page">
      <button onClick={handleClearCart} className="del-cart">Clear cart</button>
      <ItemList itemList={cartStoreItems} btn="delete" />
    </div>
  );
};

export default CartComponent;
