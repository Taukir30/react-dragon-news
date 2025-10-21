import React, { use } from 'react';
import MyContainer from '../MyContainer/MyContainer';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthContext';

const NavBar = () => {

    const {user, logOut} = use(AuthContext);

    return (
        <div>
            <MyContainer className={'flex flex-col md:flex-row justify-between items-center gap-5 my-5'}>
                <div className="blank w-[1px] md:w-[150px]">
                    {user && user.email}
                </div>
                <div className="nav">
                    <ul className='flex gap-5 text-accent'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/career'>Career</NavLink></li>
                    </ul>
                </div>
                <div className="right flex gap-5">
                    <img src={userIcon} alt="" />
                    { user? <button onClick={logOut} className='btn btn-primary w-30'>Log out</button> : <Link to='/auth/login' className='btn btn-primary w-30'>Login</Link>}
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;