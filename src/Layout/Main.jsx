import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='mx-4 md:mx-12 h-[calc(100vh-75px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;