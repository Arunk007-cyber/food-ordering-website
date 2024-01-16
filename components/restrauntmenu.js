import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import {IMG_CDN_URL} from "../src/constant"
import Shimmer from "./shimmer"
import useRestraunt from '../utils/useRestraunt';
import { MENU_CDN_URL } from "../src/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Restrantmenu=()=>{
    const {id}=useParams();
//  const restaurant=useRestraunt(id);
 const [menuItems, setMenuItems] = useState([]);
 const [restaurant,setRestaurant]=useState(null);
 const dispatch= useDispatch();
    const AddItem=(item)=>{
      dispatch(addItem(item));
    }


    useEffect(()=>{
        getRestrauntInfo();
    },[]);

 async function getRestrauntInfo(){
    const data=await fetch(MENU_CDN_URL+id
      )
    console.log('data',data);
    const json=await data.json();
    console.log('json',json);
    const data2=json.data.cards[0].card.card.info
    console.log('data2 ',data2);
    setRestaurant(data2);

    // const menuItems=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name;
    // console.log('menuItems ',menuItems);
     const menuItemsData = json?.data?.cards[2]?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')?.
                            map(x=> x.itemCards).flat()
                              .map(x=> x.card?.info) || [];
      
    // console.log('menuItemsData',menuItemsData);
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      console.log('uniqueMenuItems',uniqueMenuItems);
      setMenuItems(uniqueMenuItems);
 }

     
    return (!restaurant)?<Shimmer />:(
      
        <div className="">
            <div className="flex flex-col">
            {console.log('at line 51')}
            <h1 className="font-sans text-xl">{restaurant?.name} </h1>
            <img className="w-20 h-25 " src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
            <h2 className="font-semibold ">{restaurant?.name}</h2>
            <h2 className="font-semibold">{restaurant?.costForTwoMessage}</h2>         
            </div>
            <div className="p-20 pl-9 py-7 ">
            <h2 className="font-bold text-2xl">Menu</h2>
            {menuItems.map((item) =>{
               return(
                <div className="menu-items" key={item?.id}>
                <img className="w-80 " src={IMG_CDN_URL+item?.imageId} alt={item?.name} /> 
                <button className="p-2 m-2 bg-green-400" onClick={()=>AddItem(item)}>add Item</button>  
                <h5 className="font-serif">{item?.name +' : '+ 'Rs ' +item?.price/100}</h5>
               </div>
                
               );
            })}
            </div>
        </div>
    );

console.log('at line 75');

}

export default Restrantmenu;