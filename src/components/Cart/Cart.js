import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import ItemList from "../ResturantMenu/ItemList";
import { deleteItems } from "../../utils/cartSlice";

const CartComponent = () => {
  const cartStoreItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(deleteItems());
  };
  console.log("cartStoreItems", cartStoreItems);
  return (
    <div className="cart-page">
      <button onClick={handleClearCart} className="del-cart">
        Clear cart
      </button>
      {cartStoreItems.length == 0 && <h1>Cart is Empty. Add Items to cart.</h1>}
      <ItemList itemList={cartStoreItems} btn="delete" />
    </div>
  );
};

export default CartComponent;
