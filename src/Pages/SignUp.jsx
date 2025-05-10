import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [nameError,setNameError] =useState("")
    const {creatUser,setUser,updateUser} = use(AuthContext);

    const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if(name.length < 5){
      setNameError("Name should be more then 5 character")
      return;
    }
    else{
      setNameError("")
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    // console.log({ name, photo, email, password, form });
    // creat user 
creatUser(email,password)
.then(result=>{
    const user = result;
    // console.log(user)
    updateUser({displayName:name,photoURL:photo}).then(()=>{
    setUser({...user,displayName:name,photoURL:photo})
    navigate("/")
    })
    .catch(error=>{
     console.log(error)
      setUser(user);
    })
    
})
.catch(error=>{
    const errorMessage = error.message;
    alert(errorMessage)
})
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center my-3">
            Register ypur account
          </h2>
          <form onSubmit={handleSignUp} className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            {
              nameError && <p className="text-xs text-red-500">{nameError}</p>
            }

            {/* IMG */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Your Photo"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <div className="flex items-center gap-3 my-2">
              <button type="submit" className="border p-3 rounded-xl "></button>
              <p className="font-bold">Accept Term & Conditions</p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>

            <p className="text-center p-3">
              Already Have An Account?
              <Link className="  text-red-400 underline" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
