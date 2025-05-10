import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../src/assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user,userLogOut } = use(AuthContext);

// console.log(user)
  const handleLogOut =()=>{
    userLogOut()
    .then(()=>{
      alert('You Log Out succsessfully')
    })
    .catch(error=>{
      alert(error);
    })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="">{user && user.email}</div>

      <div className="flex items-center gap-3 text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon }`} alt="" />
        {user ? (
         <button onClick={handleLogOut} className="btn px-5 text-white bg-[#403F3F]  ">Log Out</button>
        ) : (
          <Link to="/auth/login">
            {" "}
            <button className="btn px-5 text-white bg-[#403F3F]  ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
