// Header.js
import React, { useContext } from "react";
import { Search, User, Menu, Settings, Bell, AlignRight } from 'lucide-react';
import Font from '../Font';
import CreateHeader from "../../context/contextHeader";
import createMenu from "../../context/contextMenu";

const Header = () => {
    const { page } = useContext(CreateHeader);
    const { menu, setMenu } = useContext(createMenu);

    return (
        <div className="pt-3 sm:pt-4 grid items-center rounded-xl pl-3 pr-3 grid-cols-2">
            <div className="cols-1">
                <div className="flex gap-2">
                    <Font className="text-[#adb5bd] font-medium text-sm">{`Pages /`}</Font>
                    <Font className="text-white text-sm">{`${page}`}</Font>
                </div>
                <Font className="font-bold text-white text-[16px]">{page}</Font>
                <div className="relative block md:hidden">
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        className="border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pl-8 w-36 h-9"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#495057]" size={15} />
                </div>
            </div>
            <div className="justify-self-end sm:flex sm:items-center sm:gap-4">
                <div className="relative hidden md:block">
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        className="border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pl-10 w-36 h-9"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#495057]" size={20} />
                </div>
                <div className="grid grid-flow-col sm:items-center sm:gap-4 gap-2">
                    <User size={20} className="text-white" />
                    <span className="hidden sm:block text-white">Sign In</span>
                    {menu ? 
                        <AlignRight size={20} className="text-white block xl:hidden" onClick={() => setMenu(!menu)} /> : 
                        <Menu size={20} className="text-white block xl:hidden" onClick={() => setMenu(!menu)} />
                    }
                    <Settings size={20} className="text-white" />
                    <Bell size={20} className="text-white" />
                </div>
            </div>
        </div>
    );
}

export default Header;
