import RestaurantCard from "./RestaurantCard"
 import Shimmer from "./Shimmer";
 import { useState, useEffect} from "react";
 import { Link } from "react-router-dom";
 
 

const Body = () =>
{ // local state variable
  const [listOfRestaurant , setlistOfRestaurant] = useState([]);
  const[listOfRestaurantForSearch , setListOfRestaurantForSearch]= useState([]); 
  const [searchText , setSearchText] =  useState("");

    console.log("Body Render " , listOfRestaurant);

    const fetchData = async()=>{

     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25470&lng=77.39370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

   const json = await data.json();
   console.log(json);
  
   setlistOfRestaurant(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
   setListOfRestaurantForSearch(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants) 
   } 

   useEffect(()=>{
      fetchData();
   } , []);

   

   if(listOfRestaurant.length === 0)
      <Shimmer/>
   
   return ( <div className="body">
    <div className="flex">
        <div className=" m-4 p-4 col-span-3 w-1/2" >
          < input type="text" className=" p-2 border rounded-l-full border-black  w-80" 
          value={searchText} 
          onChange = {(e)=> {
            setSearchText(e.target.value);
          }} />  

         <button className="p-2 bg-green-100  rounded-r-full border border-black " onClick={()=>{
            // filter the restro-cards and update the ui
            // searchtext
            const filteredRestaurant = listOfRestaurantForSearch.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setlistOfRestaurant(filteredRestaurant);
         }}>&#128269;</button>
        </div>
       
       <div className="search m-4 p-4 flex items-center ">
       <button className="filter-btn  px-4 py-2 bg-gray-100 border border-black rounded-full " 
       onClick={()=>{
        const filteredList = listOfRestaurant.filter(
           (res) => res.info.avgRating > 4.5
          );
        
          setlistOfRestaurant(filteredList);
       }}

       >
        Top Rated Restaurant</button>
       </div>
       
    </div>
    <div className="flex flex-wrap">
        {
           listOfRestaurant.map( (restaurant) => 
         (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="style-none">
           
             <RestaurantCard  resData={restaurant}/>
        
            </Link>
         ))
        }
    </div>
  </div>)
}

export default Body;