import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_Menu } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items, showAddButton = true, onRemoveItem = null }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch
    dispatch(addItem(item));
  };

  if (!items || !Array.isArray(items)) {
    return <div>No items available</div>; // Provide a fallback if items is not an array or is undefined
  }

  const handleRemoveItem = (item) => {
    if (onRemoveItem) {
      onRemoveItem(item);
    }
  };

  return (
    <div>
      {items.map((item) => {
        const cardInfo = item?.card?.info; // Use optional chaining to ensure card and info exist

        if (!cardInfo) {
          return null; // If no card info, skip rendering
        }

        return (
          <div
            key={cardInfo.id}
            className="p-2 m-2 border-gray-300 border-b-2 flex justify-between"
          >
            <div className="text-left">
              <h2>{cardInfo.name}</h2>
              <h4>
                ₹
                {cardInfo.price
                  ? cardInfo.price / 100
                  : cardInfo.defaultPrice / 100}
              </h4>
            </div>
            <div>
              {showAddButton &&
                (cardInfo.imageId ? (
                  <button
                    className="p-2 bg-black text-green-200 absolute rounded-lg  "
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                ) : (
                  <button
                    className="p-0 bg-black text-green-200 m-auto flex bg-center rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                ))}

              {onRemoveItem && (
                <button
                  className="p-2 bg-red-500 text-white rounded-lg ml-2"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              )}

              <div>
                {cardInfo.imageId ? (
                  <img
                    src={CDN_Menu + cardInfo.imageId}
                    className="w-36"
                    alt={cardInfo.name}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
