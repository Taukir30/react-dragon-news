import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import MyContainer from '../components/MyContainer/MyContainer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen absolute top-0 w-full'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='py-3'>
                <MyContainer>
                    <Outlet></Outlet>
                </MyContainer>
            </main>
        </div>
    );
};

export default AuthLayout;