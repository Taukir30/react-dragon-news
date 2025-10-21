import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews/LatestNews';
import MyContainer from '../components/MyContainer/MyContainer';
import NavBar from '../components/NavBar/NavBar';
import LeftAside from '../components/LeftAside/LeftAside';
import RightAside from '../components/RightAside/RightAside';

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
                <MyContainer className={'grid grid-cols-12 gap-5'}>
                    <aside className="left_nav col-span-3 sticky top-0 h-fit">
                        <LeftAside></LeftAside>
                    </aside>
                    <section className="main col-span-6">
                        <Outlet></Outlet>
                    </section>
                    <aside className="right_nav col-span-3 sticky top-0 h-fit">
                        <RightAside></RightAside>
                    </aside>
                </MyContainer>
            </main>
        </div>
    );
};

export default HomeLayout;