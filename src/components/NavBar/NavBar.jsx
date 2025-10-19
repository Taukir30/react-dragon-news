import React from 'react';
import MyContainer from '../MyContainer/MyContainer';
import { NavLink } from 'react-router';
import userIcon from '../../assets/user.png'

const NavBar = () => {
    return (
        <div>
            <MyContainer className={'flex justify-between items-center my-5'}>
                <div className="blank w-[1px] md:w-[150px]"></div>
                <div className="nav">
                    <ul className='flex gap-5 text-accent'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/career'>Career</NavLink></li>
                    </ul>
                </div>
                <div className="right flex gap-5">
                    <img src={userIcon} alt="" />
                    <button className='btn btn-primary w-30'>Login</button>
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;