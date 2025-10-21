import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);
    // console.log(data)

    const [passToggle, setPassToggle] = useState(false);


    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name)

        createUser(email, password)
            .then( result => {
                console.log(result);
                setUser(result.user);
                form.reset()
            })
            .catch( error => console.log(error))
    }


    return (
        <div className='flex justify-center items-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm py-2 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-xl text-center font-bold'>Register your account</h1>
                    <hr className='text-gray-100 py-1' />
                    <form onSubmit={handleRegistration}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Your Name</label>
                            <input type="text" name='name' required className="input" placeholder="Enter Your Name" />
                            {/* photo */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' required className="input" placeholder="Photo" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' required className="input" placeholder="Email" />
                            {/* password */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input type={passToggle? 'text':'password'} name='password' required className="input" placeholder="Password" />
                                <button onClick={()=>setPassToggle(!passToggle)} className='absolute top-8 right-6'>{passToggle? <IoEyeOutline size={15}/> : <LuEyeClosed />}</button>
                            </div>

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center text-xs mt-3'>Already Have An Account ? <Link className='text-red-600' to='/auth/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;