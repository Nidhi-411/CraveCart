import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom"; // For navigation

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    const uniqueItemId = item?.card?.info?.id; // Get the unique ID
    if (uniqueItemId) {
      dispatch(removeItem({ id: uniqueItemId })); // Dispatch the Redux action with the ID
    }
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += item?.card?.info?.price
      ? item?.card?.info?.price / 100
      : item?.card?.info?.defaultPrice / 100;
  });
  // totalPrice = totalPrice/100;
  console.log(totalPrice);

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/2 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h2>
            cart is empty
            <button
              className="text-blue-500  m-2"
              onClick={() => navigate("/")} // Navigates to the home page
            >
              Add item to cart
            </button>
          </h2>
        )}
        <ItemList
          items={cartItems}
          showAddButton={false}
          onRemoveItem={handleRemoveItem}
        />
        <hr style={{ border: "1px solid gray", margin: "10px 0" }} />{" "}
        {/* Horizontal line */}
        {/* {
        cartItems.length != 0 && ( <div> <p >Total Price: ₹  {totalPrice}</p>
        <br/>
        <p>Discount : ₹ 200 </p> 
        <br/>
        <p>you need to pay only : ₹  {totalPrice-200 > 0 ? totalPrice-200 :0}</p> 
        </div>)
      }
        */}
        {cartItems.length != 0 &&
          (totalPrice >= 500 ? (
            <div>
              {" "}
              <p>Total Price: ₹ {totalPrice}</p>
              <br />
              <p>Discount : ₹ 200 </p>
              <br />
              <p>
                you need to pay only : ₹{" "}
                {totalPrice - 200 > 0 ? totalPrice - 200 : 0}
              </p>
            </div>
          ) : (
            <div>
              {" "}
              <p>Total Price: ₹ {totalPrice}</p>
              <br />
              <p>Discount : ₹ 0 </p>
              <br />
              <p>you need to pay only : ₹ {totalPrice}</p>
              <p>
                shop upto ₹ 500 and get discount of ₹200
                <button
                  className="text-blue-500  m-2"
                  onClick={() => navigate("/")} // Navigates to the home page
                >
                  Add item to cart
                </button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
