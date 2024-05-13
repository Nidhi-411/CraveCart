import { useState } from "react";

const User = (props)=>{
     const [count]  = useState(0);
    const{name , location} = props;
    return(
        <div className="user-card">
            <h3>count : {count}</h3>
           <h2> name : {name}</h2> 
        <h3>location : {location}</h3>
           <h4>contact : addb@gmail.com</h4>
        </div>
    )
}
export default User;