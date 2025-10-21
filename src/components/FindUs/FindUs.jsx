import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className='mt-8'>
            <h2 className='font-bold'>Find Us On</h2>
            <div className='my-3 join join-vertical w-full'>
                <button className='btn text-left justify-start py-6 join-item w-full'><FaFacebook />Facebook</button>
                <button className='btn text-left justify-start py-6 join-item w-full'><AiFillTwitterCircle /> Twitter</button>
                <button className='btn text-left justify-start py-6 join-item w-full'><FaInstagramSquare /> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;