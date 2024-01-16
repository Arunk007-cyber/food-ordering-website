import { useDispatch, useSelector } from "react-redux"
import MenuItemCard from "./menuItemcard";
import { clearCart } from "../utils/cartSlice";


const cart = () => {

    const dispatch=useDispatch();
    const handleclearCart=()=>{
        dispatch(clearCart());
    }


    



    const cardItems=useSelector((store)=>store.cart.items);
    // console.log('store itms',cardItems);
  return (
    <>
    <div className="font-extrabold text-4xl">cartItem</div>
    <div className="flex">
    <button className=" flex-col p-2 m-2 bg-green-300 " onClick={()=>handleclearCart()}>clear cart</button>
    </div>
    {
        cardItems.map((items)=><MenuItemCard key={items.id} {...items}/>)
    }
    </>
  )
}

export default cart