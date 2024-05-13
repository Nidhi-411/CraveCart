import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    

    constructor(props){

        super(props);
      // console.log("Parent Constructor"); 
    }
   
    componentDidMount(){
       // console.log("parent did mount")
    }
   render(){
    //console.log("parent render");
    return(
       
        <div>
          <h1>About</h1>
          <div>

            loggedIn user 
            <UserContext.Consumer>{
              ({loggedInUser})=>(
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
              )
              }</UserContext.Consumer>
           
          </div>
         <UserClass name={"Tonu Titu "} location={"Pta-nhi-pta"} /> 
        
        </div> 
    );
   }
}



export default  About; 