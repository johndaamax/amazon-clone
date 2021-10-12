import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from './HeaderActions';
import MenuIcon from './MenuIcon';

import { useBasketContext } from '../context/BasketProvider';
import { useAuthContext } from '../context/AuthProvider';

import ProfileActionList from './ProfileActionList';
import Drawer from '@mui/material/Drawer'
import clsx from 'clsx';

function Header() {
    const [isBackdropActive, setIsBackdropActive] = useState(false);
    const [ismobileNavOpen, setIsMobileNavOpen] = useState(false);
    const { basket } = useBasketContext();
    const { user, token } = useAuthContext();
    const mainUserAreaRef = useRef(null);
    let pageHeight = useRef(0);

    const totalItems = basket.reduce((acc, cv) => acc + cv.quantity, 0);
    const isLoggedIn = !!token;
    const backdropClasses = clsx(
        isBackdropActive ? `visible opacity-60` : `invisible opacity-0`
    )

    function isolateClickOnMobileUserDetails(e) {
        //discard clicks that close the mobile drawer when clicking on the user details element
        if (mainUserAreaRef.current && !mainUserAreaRef.current.contains(e.target)) {
            setIsMobileNavOpen(false)
        }
    }
    return (
        <header className='static top-0 font-display'>
            <nav id='nav-top' className='relative z-50'>
                <div className='py-2 px-4 lg:px-2 flex bg-[#131A22] space-x-4'>
                    <div id='nav-logo' className='flex flex-col justify-center'>
                        <Link to='/'>
                            <img
                                className='mt-1 max-w-[90px] px-2'
                                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                                alt='Amazon Logo'
                            />
                        </Link>
                    </div>
                    <div className='flex flex-1 items-center rounded-md'>
                        <input className='px-3 py-1 w-full rounded-l focus:outline-none' type='text' placeholder='Search' />
                        <svg className="w-8 h-8 p-1 rounded-r bg-[#FEBD69] hover:bg-[#F5A946]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div
                        className='space-x-4 hidden md:flex'
                        id='desktop-nav'
                    >
                        <div
                            role='button'
                            className='relative py-1'
                            onMouseEnter={() => {
                                pageHeight.current = document.documentElement.scrollHeight - 1;
                                setIsBackdropActive(true)
                            }}
                            onMouseLeave={() => { setIsBackdropActive(false) }}
                        >
                            {isBackdropActive && <ProfileActionList anchor='bottom' />}
                            <HeaderActions primary={`Hello, ${isLoggedIn ? `${user.name}` : 'Sign In'}`} secondary='Accounts & Lists' />
                        </div>
                        <Link to='#' className='py-1'>
                            <HeaderActions primary='Returns' secondary='& Orders' />
                        </Link>
                        <Link to='#' className='py-1'>
                            <HeaderActions primary='Your' secondary='Prime' />
                        </Link>
                        <Link to='/checkout' className='py-1'>
                            <div className='flex items-center space-x-2 text-white'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className='text-center font-bold'>{totalItems}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center md:hidden'>
                        <MenuIcon toggle={() => setIsMobileNavOpen(prev => !prev)} />
                    </div>
                </div>
                <div
                    className={`hidden md:block absolute top-0 left-0 w-full z-[-1] bg-black ${backdropClasses}`}
                    style={{
                        height: `${pageHeight.current || 0}px`,
                        transition: 'all 0.5s ease-in-out'
                    }}
                    onClick={() => setIsBackdropActive(prev => !prev)}>
                </div>
                <Drawer
                    anchor='left'
                    open={ismobileNavOpen}
                    onClose={() => setIsMobileNavOpen(false)}
                    sx={{
                        '& .MuiPaper-root': {
                            backgroundColor: '#131A22',
                            width: '250px',
                            maxWidth: '75vw'
                        }
                    }}
                >
                    <div
                        className='flex flex-col justify-center px-4 py-6'
                        id='mobile-nav'
                        onClick={isolateClickOnMobileUserDetails}
                    >
                        <span
                            role='button'
                            className='relative p-2'
                            ref={mainUserAreaRef}
                            onClick={() => { setIsBackdropActive(prev => !prev) }}
                        >
                            {isBackdropActive && <ProfileActionList anchor='bottom' />}
                            <HeaderActions primary={`Hello, ${isLoggedIn ? `${user.name}` : 'Sign In'}`} secondary='Accounts & Lists' />
                        </span>
                        <span className='p-2'>
                            <Link to='#' className='mb-4'>
                                <HeaderActions primary='Returns' secondary='& Orders' />
                            </Link>
                        </span>
                        <span className='p-2'>
                            <Link to='#' className='mb-4'>
                                <HeaderActions primary='Your' secondary='Prime' />
                            </Link>
                        </span>
                        <span className='p-2' >
                            <Link to='/checkout' className='mb-4' onClick={() => { setIsBackdropActive(false) }}>
                                <div className='flex items-center space-x-2 text-white'>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className='text-center font-bold'>{basket.length}</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                </Drawer>
            </nav>
        </header>
    )
}

export default Header
