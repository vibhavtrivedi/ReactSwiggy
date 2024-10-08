import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import "./ItemList.css";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ itemList, btn }) => {
  const dispatch = useDispatch();
  console.log(addItem);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {itemList.map((item) => (
        <div key={item.card.info.id} className="item-card">
          <div className="item-details">
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              $
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <span className="item-desc">{item.card.info.description}</span>
          </div>
          <div className="image">
            <img alt="image" src={CDN_URL + item.card.info.imageId} />
            {btn == "add" ? (
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className="button"
              >
                + Add
              </button>
            ) : (
              <button
                onClick={() => {
                  handleDeleteItem(item);
                }}
                className="button"
              >
                - Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
