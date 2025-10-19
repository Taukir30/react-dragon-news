import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews/LatestNews';
import MyContainer from '../components/MyContainer/MyContainer';
import NavBar from '../components/NavBar/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <NavBar></NavBar>
            </header>

            <main>
                <MyContainer>
                    <section className="left_nav"></section>
                    <section className="main">
                        <Outlet></Outlet>
                    </section>
                    <section className="right_nav"></section>
                </MyContainer>
            </main>
        </div>
    );
};

export default HomeLayout;