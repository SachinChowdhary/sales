import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import Navbar from "../sidenavbar/Navbar";

const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <div className="xl:w-[20%]">
                    <Navbar />
                </div>
                <div className="flex flex-col flex-1 w-full sm:w-[100%] mr-6 ml-6 sm:ml-6">
                    <Header />
                    <div className="flex-1 overflow-auto mx-3">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout;