import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
             <Header/>
        <Navbar/>
        {children}
        </>
    );
};

export default MainLayout;