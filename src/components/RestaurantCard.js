import { CDN_URL } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    name,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[230px]    border-gray-400 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        className="res-logo rounded-xl  "
        alt="res-log"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4 ">{name}</h3>
      <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>

      <h4 className=" font-medium my-2">{costForTwo} </h4>

      <span className="my-3  bg-green-300 w-fit p-1 text-sm font-semibold rounded-lg flex items-center">
        <AiFillStar className="star mr-1" /> {avgRating} stars
      </span>
    </div>
  );
};

// heigher order component
// input - RestaurantCard  , output RestaurantCardPromoted

export default RestaurantCard;
