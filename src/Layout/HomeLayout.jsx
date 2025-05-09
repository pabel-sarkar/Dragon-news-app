import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/HomeLayout/LeftAside';
import RiightAside from '../component/HomeLayout/RiightAside';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            </header>
            
            <main className='w-11/12 my-3 mx-auto grid grid-cols-12 gap-5'>
                
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RiightAside></RiightAside>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;