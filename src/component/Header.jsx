import React from 'react';
import logo from '../../src/assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <img className='max-w-[485px] mt-3' src={logo} alt="" />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-[#]'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;