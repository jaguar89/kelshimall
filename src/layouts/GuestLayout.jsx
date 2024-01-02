import React, {useEffect} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Categories from "../components/Categories.jsx";
import {fetchHomeData} from "../apiService.js";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import {Spinner} from "flowbite-react";


function GuestLayout(props) {
    const homeContext = useHomeContext();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHomeData();
                homeContext.setHomeData(data);
            } catch (error) {
                // console.log('Error, GuestLayout.jsx: ' + error);
            }
        };
        fetchData();
    },[]);

    return (
        <>
            <Navbar/>

            {homeContext.categories.length > 0 && <Categories/>}

            {homeContext.categories.length === 0 ? <div dir={'rtl'} className="mx-auto text-center p-4"><Spinner aria-label="Default status example"/></div> : <Outlet/>}

            <Footer/>
        </>
    );
}

export default GuestLayout;