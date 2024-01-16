import { useEffect,useState } from "react";

const useRestraunt=(id)=>{
    console.log('at line 4 of custom hook');
    const [restaurant,setRestaurant]=useState(null);
    console.log('at line 6 of custom hook');
    useEffect(()=>{
        console.log('at line 8 of custom hook');
        getRestrauntInfo();
    },[]);  

    async function getRestrauntInfo(){
     console.log('at line 13 of custon hook');
        const data=await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId='+id)
        // console.log('data',data);
        const json=await data.json();
        // console.log('json',json);
        const data2=json.data.cards[0].card.card.info
        // console.log('data2 ',data2);
        setRestaurant(data2);
    console.log('at line 21 of custom hook');
     }
console.log('at line 23 of custom hook');
    return restaurant;

}   

export default useRestraunt;