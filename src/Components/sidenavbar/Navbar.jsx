// Navbar.js
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assets/logo-ct-dark.png';
import createMenu from '../../context/contextMenu';
import Font from '../Font';
import { TvMinimal, CalendarDays, CreditCard, Box, Globe, UserRound } from 'lucide-react';

const Navbar = () => { 
    const { menu, setMenu } = useContext(createMenu);
    const location = useLocation();
    
    const options = [
        { name: 'Dashboard', path: '/', icon: <TvMinimal size={20} className='text-[#5e72e4]' /> },
        { name: 'Tables', path: '/tables', icon: <CalendarDays size={20} className='text-[#fd7e14]' /> },
        { name: 'Billing', path: '/billing', icon: <CreditCard size={20} className='text-[#2dce89]' /> },
        { name: 'Virtual Reality', path: '/virtualreality', icon: <Box size={20} className='text-[#11cdef]'/> },
        { name: 'RTL', path: '/rtl', icon: <Globe size={20} className='text-[#f5365c]'/> }, 
        { name: 'Profile', path: '/profile', icon: <UserRound size={20} className='text-[#343a40]' /> },

    ];

    return (
        <div className={`h-screen bg-white rounded-2xl ml-6 mt-4 overflow-y-auto ${menu ? 'block' : 'hidden'} xl:block`}>
            <div className="flex items-center justify-center gap-3 pt-7">
                <img src={image} alt="logo" className="w-8 h-8" />
                <Link to="/" onClick={() => setMenu(!menu)}>
                    <Font className="text-base text-gray-600 font-semibold">Argon Dashboard 2</Font>
                </Link>
            </div>
            <div className="h-[1px] w-full bg-gray-50 mt-5"></div>
            <div className="mt-6">
                {options.map((option, index) => {
                    const isActive = location.pathname === option.path;
                    return (
                        <Link 
                            to={option.path} 
                            key={index} 
                            className={`flex items-center gap-4 py-3 px-3 m-1 rounded-xl ${isActive ? 'bg-[#e9ecef]' : 'bg-white'}`}
                            onClick={() => setMenu(!menu)}
                        >
                            <Font>{option.icon}</Font>
                            <Font className={`text-sm ${isActive ? 'text-[#344767] font-semibold' : 'text-[#67748e]'}`}>{option.name}</Font>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
