import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold '>Login With</h2>
            <div className='space-y-3'>
                <button className='btn  hover:bg-gray-800 btn-outline w-full'><FcGoogle size={24}></FcGoogle> Login With Google</button>
                <button className='btn  t hover:bg-red-300 btn-outline w-full'><FaGithub size={24}></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;