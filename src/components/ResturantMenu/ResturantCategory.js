import ItemList from "./ItemList";
import "./ResturantCategory.css";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  const handleItem = () => {
    if (showItem) {
      setShowIndex(null);
    } else {
      setShowIndex();
    }
  };
  return (
    <div className="accordion">
      <div onClick={handleItem} className="accordion-title">
        <span>
          {data.title}({data.itemCards.length})
        </span>
        <span>+</span>
      </div>
      {showItem && <ItemList itemList={data?.itemCards} btn={"add"} />}
    </div>
  );
};
export default ResturantCategory;
