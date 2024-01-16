
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import checkOnLine from "../utils/checkOnLine";
import usercontext from "../utils/userContext";
import { useSelector } from "react-redux";


const Title = () => {
    return (
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU"
          alt="logo"
          className="h-16 p-1.5"
        />
      </a>
  );
  };


  const 
  HeaderComponent = () => {
    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const {user}=useContext(usercontext)
    const isOnline=checkOnLine();
    
    return (
      <div className="flex justify-between bg-black shadow-lg ">
        <Title />
        <div className="nav-items justify-items-center">
          <ul className="flex py-5">
            <Link className="UL" to="/">
              <li className="px-2 text-white">Home</li>
              </Link>
            <Link className="UL" to="/about"><li className="px-2 text-white">About</li></Link> 
            <Link className="UL" to="/contact "><li className="px-2 text-white">Contact Us</li></Link>
            <Link className="UL" to="/instamart "><li className="px-2 text-white">Instamart</li></Link>
            <Link to="/cart" className="px-2 text-white" >Cart-{cartItems.length}</Link>
            
          </ul>
        </div>
        {/* {console.log('isOnline------------------',isOnline)} */}
        <h1 className="text-white">{isOnline?"🍏":"🔴"}</h1>
        <span className="p-2 m-2 text-red-500">{user.name}</span>
    {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)} className="text-white">LogOut</button>:<button className="text-white" onClick={()=>setIsLoggedIn(true)}>LogIn</button>}
      </div>
    );
  };


  export default HeaderComponent;