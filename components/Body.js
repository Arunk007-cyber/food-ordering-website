import RestrauntCard from "./RestrauntCard";
import { restro } from "../src/constant";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom"
import {filterData} from "../utils/helper";
import checkOnline from "../utils/checkOnLine";





const Body = () => {
  const [allRestrauntList, setAllRestrauntList] = useState([]);
  const [searchInput, setSearchInput] = useState(""); //return array as 0th element is variable name and 1st element is function to update variable name
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  // const repeatedRestaurants = Array.from({ length: 10}, () => filteredRestraunt).flat();
   

 useEffect(()=>{
   
  getRestraunt();

 },[]);

  async function getRestraunt(){
    
   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
   console.log('data---------------',data);
   const json=await data.json();
   
  //  const data2=json?.data?.cards[2]?.data?.data?.cards;
  console.log('json',json);
   const data2=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
  //  console.log('data3--------------',data3);
  console.log(';data2',data2);
   setFilteredRestraunt(data2);
   setAllRestrauntList(data2);

  }

  const isOnline=checkOnline();
  if(!isOnline){
    return <h1>🔴 offline,please check your internet connection</h1>
  } 

//conditional rendering
// if my restro is empty return shimmer ui
// if my restro has data return actual ui
if(!allRestrauntList){
  return null;
}

    // if(filteredRestraunt?.length=== 0){
    //   console.log('insdie filtered restraunt');
    // return  <h1>No Restaurant Found Of Your Choice</h1>;
  
    // }

  {console.log("allRestrauntList",allRestrauntList)}
  return allRestrauntList?.length === 0?


  (<Shimmer />)
  :
  (
    <>
      <div className=" flex p-2 m-2 justify-center" >
        <input
        
          type="text"
          className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/12 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="search your favourite restaurant..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className=" ml-2 p-2 bg-gray-200 rounded-xl"
          onClick={() => {
            const  data = filterData(searchInput, allRestrauntList); 
            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {console.log('fileteredrestautant==============',filteredRestraunt)}
        {filteredRestraunt.map((restrant) => {
          console.log('restrant',restrant);
          return (
          <Link className="hello" to={"/restrant/"+restrant.info.id} key={restrant.info.id}>
          <RestrauntCard {...restrant.info}  />
          </Link>
          );
        })}
        {/* {repeatedRestaurants.map((restaurant) => (
        <Link className="Link-style" to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
          <RestrauntCard {...restaurant.info} />
        </Link>
      ))} */}

        {/* <RestrauntCard {...restro[0].info}/>
        <RestrauntCard {...restro[1].info}/>
        <RestrauntCard {...restro[2].info}/>
        <RestrauntCard {...restro[3].info}/>
        <RestrauntCard {...restro[4].info}/>
        <RestrauntCard {...restro[5].info}/>
        <RestrauntCard {...restro[6].info}/>
        <RestrauntCard {...restro[7].info}/>
        <RestrauntCard {...restro[8].info}/>
        <RestrauntCard {...restro[9].info}/>
        <RestrauntCard {...restro[10].info}/>
        <RestrauntCard {...restro[11].info}/> */}
      </div>
    </>
  );


  
};

export default Body;
