import { useEffect } from "react";

const Profile=()=>{
useEffect(()=>{
const timer=setInterval(()=>{
console.log('namaste react');
},1000)

//this is used to unmount or clean the component
return()=>{
    clearInterval(timer);
    //call when we changes pages
}

},[])

return (
    <h2>it is my profile page</h2>
);

}

export default Profile;