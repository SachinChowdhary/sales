import React from "react";
import CreateHeader from "../../context/contextHeader";
import { useContext } from "react";
import { Search, User, Menu, Settings, Bell } from 'lucide-react';
import Font from '../Font.jsx'
const Header = () => {
    const { page } = useContext(CreateHeader);
    return (
    <div className=' pt-3 sm:pt-4 grid items-center rounded-xl pl-3 pr-3 grid-cols-2 '>
      <div className="cols-1">
       <Font className='text-white font-semibold'>{`Page / ${page}`}</Font>
            <Font className='font-semibold text-white'>{page}</Font>
      <div className="relative block md:hidden">
           <input 
            type="text" 
            placeholder="Type here..." 
            className="border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pl-8 w-36 h-9 sm:w-44"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#495057]" size={15} />
          </div>
    </div>
    <div className="sm:col-span-1 justify-self-end sm:flex flex-col sm:flex-row sm:items-center sm:gap-4 jus">
    <div className="relative hidden md:block">
        <input 
            type="text" 
            placeholder="Type here..." 
            className="border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none pl-10 w-36 h-9 sm:w-44"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#495057]" size={20} />
    </div>
     <div className="grid grid-flow-col sm:items-center sm:gap-4 gap-2 ">
        <User size={20} className="text-white" />
        <span className="hidden sm:block text-white">SignIn</span>
        <Menu size={20} className="text-white"/>
        <Settings size={20} className="text-white"/>
       <Bell size={20} className="text-white"/>
    </div>
   </div>
    </div>
    );
}
    
export default Header;
