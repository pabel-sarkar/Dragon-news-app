import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/HomeLayout/LeftAside';
import RiightAside from '../component/HomeLayout/RiightAside';
import Loading from '../Pages/Loading';


const HomeLayout = () => {
    const {state}=useNavigation()
    return (
        <div>
            <header>
                {import.meta.env.VITE_name}
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            </header>
            
            <main className='w-11/12 my-3 mx-auto grid grid-cols-12 gap-5'>
                
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                {
                    state=="loading" ? <Loading></Loading> :  <Outlet></Outlet>
                }    
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RiightAside></RiightAside>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;