import { Link } from "react-router-dom";
import LogoImage from "../utils/logo3.jpg"; // Import the image
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Header = ()=>{ 
   

   const cartItems = useSelector((store)=>store.cart.items); // subscribing to store using selector
   const {loggedInUser , setUserName}= useContext(UserContext);
   
   


    const handleLogout = () => {
      setUserName(""); // Set the loggedInUser to "Default user" upon logout
    };
    
   
    return (
     
        <div className ="flex justify-between  bg-slate-600 border-slate-700  shadow-xl
         py-2" >
           
           <div className="w-24 mx-2">
            <img className="image border-black shadow-lg rounded-md" src={LogoImage}/>

            
           </div>
          
           <div className="flex items-center">
              <ul className="flex">
                
                <li className="px-4 text-white"><Link to="/"> Home</Link></li>
                <li className="px-4 text-white"> <Link to="/about">About us</Link> </li>
                <li className="px-4 text-white relative">
                     <Link to="/cart" className="inline-block">
                       <FaShoppingCart className="text-2xl" /> {/* Cart Icon */}
                      <span className="absolute top-0 right-0 bg-slate-600 text-white rounded-full px-1 py-1">{cartItems.length}</span> {/* Cart Count */}
                      </Link>
               </li>
                
                {
                   loggedInUser? ( <li className="px-4 text-white">
                    <button  onClick={ handleLogout}>Logout</button>
                     </li> ):
                   <li className="px-4 text-white"> <Link to="/login">Login</Link></li>
                  
                }
                {/* <li className="px-4 text-white">{loggedInUser}</li> */}
              </ul>
           </div>
        </div>
    )
 } 

 export default Header;
