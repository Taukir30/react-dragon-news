import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;