import React from 'react';
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'
import swimingImg from '../../assets/swimming.png'

const Qzone = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='font-bold mb-5 text-center'>Qzone</h2>
            <div className='space-y-5'>
        <img src={swimingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;