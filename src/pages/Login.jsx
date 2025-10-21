import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm py-5 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-xl text-center font-bold'>Login your account</h1>
                    <hr className='text-gray-100 py-1' />
                    <form >
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center text-xs mt-3'>Dont’t Have An Account ? <Link className='text-red-600' to='/auth/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;