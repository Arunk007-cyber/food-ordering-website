import React from 'react'
import { Outlet } from 'react-router-dom';
import Profile  from './ProfileClass';

const about = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <p>this is about us page of namaste javascript</p>
        <Profile name={"arun"} />
    </div>
  )
}

export default about;