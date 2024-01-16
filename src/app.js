import React,{lazy,Suspense, useState,useContext} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../components/Header.js"
import Body from "../components/Body.js";
import Footer from "../components/Footer.jsx";
import About from "../components/about.js";
import Error from "../components/error.js";
import Contact  from "../components/contact.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Restrantmenu from "../components/restrauntmenu.js";
import Profile from "../components/ProfileClass.js";
import Shimmer from "../components/shimmer.js";
import useRestraunt from "../utils/useRestraunt.js";
import usercontext from "../utils/userContext.js";
import { Provider } from "react-redux";
import store from "../utils/store.js";
import Cart from "../components/cart.js";
// import Instamart from "../components/instamart.js";

//all are same concept
//chunking
//lazy loading
//dynamic bundling
//on demand loading
//code splitting
const Instamart=lazy(()=>import("../components/instamart.js"))


//type of routing
// 1. client side routing
// 2. server side routing

const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Arun Kumar",
    email:"ak.titan007@gmail.com"
  })
  return (
    <Provider store={store}>
    <usercontext.Provider value={{user:user}}>
      <HeaderComponent />
      {/* <Body /> */}
      <Outlet />
      <Footer />
      </usercontext.Provider>
    </Provider>
  );
};

const approuter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error />,
    children:[{
      path:'/',
      element:<Body />
    },
    {
      path:'/about',
      element:<About />,
      children:[{
        path:'profile',
        element:<Profile />
      }]
    },
    {
      path:'/contact',
      element:<Contact />
    },
    {
      path:'/restrant/:id',
      element:<Restrantmenu  />

    },
    {
      path:'/instamart',
      element:<Suspense fallback={<Shimmer />}><Instamart /></Suspense>

    },
    {
      path:'/cart',
      element:<Cart />
    }
  ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
