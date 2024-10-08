import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assets/logo-ct-dark.png';
import { TvMinimal, CalendarDays, CreditCard, Box, Globe, UserRound, BookCopy, Notebook } from 'lucide-react';
const Navbar = () => { 
  const options = [
    { name: 'Dashboard', path: '/', icon:<TvMinimal size={20} className='text-[#5e72e4]' /> },
    { name: 'Tables', path: '/tables', icon:<CalendarDays size={20} className='text-[#fd7e14]' /> },
    { name: 'Billing', path: '/billing', icon:<CreditCard size={20} className='text-[#2dce89]' />},
    { name: 'Virtual Reality', path: '/virtualreality', icon:<Box size={20} className='text-[#11cdef]'/> },
    { name: 'RTL', path: '/rtl', icon:<Globe size={20} className='text-[#f5365c]'/> }, 
    { name: 'Profile', path: '/profile', icon:<UserRound size={20} className='text-[#343a40]' /> },
    { name: 'Sign In', path: '/signin', icon: <BookCopy size={20} className='text-[#fd7e14]'/> },
    { name: 'Sing Up', path: '/signup', icon:<Notebook size={20} className='text-[#11cdef]' /> }
  ];
const location = useLocation();
  return (
<> 
     <div className='hidden md:hidden sm:h-screen xl:h-screen xl:bg-white xl:rounded-2xl xl:ml-6 xl:mt-4 xl:block'>
      <div className='flex items-center justify-center gap-3 pt-7'>
        <img src={image} alt='logo' className='w-8 h-8' />
        <Link to='/' className='text-base text-gray-900 font-semibold'>Argon Dashboard 2</Link>
      </div>
      <div className='h-[2px] w-full bg-black mt-5 '></div>
      <div className='mt-6'>
      {
        options.map((option, index) => {
          const isActive = location.pathname === option.path;
          return (
          <Link 
          to={option.path} 
          key={index} 
          className={`flex items-start justify-start gap-4 py-3 px-6 m-1 rounded-xl ${isActive ? 'bg-[#e9ecef]' : 'bg-white'}`}
          >
            <p className='text-sm'>{option.icon}</p>
            <p className={`text-sm  ${isActive ? 'text-[#344767] font-semibold' : 'text-[#adb5bd]'}`}>{option.name}</p>
          </Link>
          )
         })
      }
      </div>
      </div>
    </>
  );
}

export default Navbar;
