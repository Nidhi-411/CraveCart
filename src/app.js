
 import React, { lazy , Suspense, useEffect } from "react";
 import ReactDOM from "react-dom/client" 
 import Header from "./components/Header";
 import Body from "./components/Body";
 import About from "./components/About";
 import Contact from "./components/Contact";
 import Footer from "./components/Footer";
 import Error from "./components/Error" 
 import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState , useEffect } from "react";
//import Grocery from "./components/Grocery";
  import { Provider } from "react-redux";   
  import appStore from "./utils/appStore"; 
  import Cart from "./components/Cart";
  import Login from "./components/Login";
  import Signup from "./components/Signup"; 
import { auth } from "./firebase";

const Grocery = lazy(() => import("./components/Grocery"));
 

    const AppLayOut = ()=>{

        const [userName , setUserName] = useState("");

        // authentication

        // useEffect(()=>{
        //  // make an Api call and snd username and password
        //  const data = {
        //      name : "Nidhi Yadav"
        //  }
        //  setUserName(data.name); 
        // }, []);

        useEffect(()=>{
          auth.onAuthStateChanged((user)=>{
            console.log(user);
            if(user){
                setUserName(user.displayName)
            }
            else{
                setUserName("")
            }
          })
        }, [])
        
        return (
            <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
            <div className="app">
              <Header/>
               <Outlet/>
               <Footer/>
            </div> 
            </UserContext.Provider>
            </Provider> 
        )
        
    }

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<AppLayOut/>,
            
            children : [
                {
                    path: "/",
                    element: <Body/>
                } ,
                {
                    path: "/about",
                    element:<About/>
                },
                {
                    path: "/contact",
                    element:<Contact/>
                },
                ,
                {
                    path: "/restaurants/:resId",
                    element:<RestaurantMenu/>
                },
                {
                    path: "/grocery",
                    element: ( <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>)
                },
                {
                    path: "/cart",
                    element:<Cart/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                
                    {
                        path: "/signup", // New signup route
                        element: <Signup />, // The component to render for /signup
                      },
               

                
            ]
            ,
            errorElement:<Error/>
           
        }

       ])
    
     
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render( < RouterProvider router={appRouter} />);