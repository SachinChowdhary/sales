// Layout.js
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import Navbar from "../sidenavbar/Navbar";
import createMenu from "../../context/contextMenu";

const Layout = () => {
    const { menu, setMenu } = useContext(createMenu);

    return (
        <div className="flex flex-col min-h-screen overflow-auto">
            <div className="flex flex-1">
                <div className={`fixed inset-0 bg-opacity-50 z-30 transition-all duration-300 ${menu ? 'w-[60%] sm:w-[40%] md:w-[30%] lg:w-[30%] block' : 'hidden'} xl:block xl:static xl:w-[20%]`}>
                    <Navbar />
                </div>
                <div className="flex flex-col flex-1 w-full overflow-y-auto">
                    <Header />
                    <div className="flex-1 mx-3">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout;
