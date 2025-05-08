import React from 'react';
import { NavLink } from 'react-router';
import user from '../../src/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
          <div className=''>

          </div>


          <div className='flex items-center gap-3 text-[#706F6F]'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
          </div>


          <div className="flex items-center gap-4">
          <img src={user} alt="" />
             <button className='btn px-5 text-white bg-[#403F3F]  '>Login</button>
          </div>

        </div>
    );
};

export default Navbar;