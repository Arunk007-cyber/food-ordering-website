import { createContext } from "react";

const usercontext=createContext({
    user:{
    name:"Dummy Name",
    email:"Dummyemail@gmail.com"
    }
})

usercontext.displayName="userContext"

export default usercontext;     





