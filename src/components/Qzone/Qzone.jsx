import React from 'react';
import swimmingPhoto from '../../assets/swimming.png'
import classPhoto from '../../assets/class.png'
import playPhoto from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='mt-3 bg-base-300 p-3 rounded'>
            <h2 className='font-bold'>Q-Zone</h2>
            <div className='my-5 join join-vertical w-full'>
                <img src={swimmingPhoto} alt="" />
                <img src={classPhoto} alt="" />
                <img src={playPhoto} alt="" />
            </div>
        </div>
    );
};

export default Qzone;