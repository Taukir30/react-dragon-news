import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='my-5 flex flex-col gap-3'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={20}/> Login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={20}/> Login with Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;