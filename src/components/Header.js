import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from './HeaderActions';
import MenuIcon from './MenuIcon';

import { useBasketContext } from '../context/BasketProvider';
import { useAuthContext } from '../context/AuthProvider';

import ProfileActionList from './ProfileActionList';
import Drawer from '@mui/material/Drawer'

function Header() {
    const { basket } = useBasketContext();
    const { user, token } = useAuthContext();
    const [isBackdropActive, setIsBackdropActive] = useState(false);
    const [ismobileNavOpen, setIsMobileNavOpen] = useState(false);

    // const classes = ismobileNavOpen ? 'translate-x-[50%]' : 'translate-x-[100%]'

    // function toggleDrawer(open) {
    //     return function (event) {
    //         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //             return;
    //         }
    //         setIsMobileNavOpen(open)
    //     }
    // }

    const isLoggedIn = !!token;
    return (
        <header className='static top-0 font-display'>
            <nav className='relative'>
                <div className='py-2 px-2 sm:px-4 flex bg-[#131A22] space-x-6'>
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
                            className='relative'
                            onClick={() => { setIsBackdropActive(prev => !prev) }}
                            role='button'
                        >
                            {isBackdropActive && <ProfileActionList />}
                            {
                                !isLoggedIn ?
                                    <Link to='/login'>
                                        <HeaderActions primary='Hello, Sign In' secondary='Accounts & Lists' />
                                    </Link>
                                    : <HeaderActions primary={`Hello, ${user.name}`} secondary='Accounts & Lists' />
                            }
                        </div>
                        <Link to='#'>
                            <HeaderActions primary='Returns' secondary='& Orders' />
                        </Link>
                        <Link to='#'>
                            <HeaderActions primary='Your' secondary='Prime' />
                        </Link>
                        <Link to='/checkout'>
                            <div className='flex items-center space-x-2 text-white'>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className='text-center font-bold'>{basket.length}</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center md:hidden'>
                        <MenuIcon toggle={() => setIsMobileNavOpen(prev => !prev)} />
                    </div>
                </div>
                <div
                    className={`absolute top-auto left-0 w-full h-full opacity-60 z-10 bg-black ${isBackdropActive ? 'block' : 'hidden'}`}
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
                        onClick={() => setIsMobileNavOpen(false)}
                    >
                        <span
                            role='button'
                            className='relative p-2'
                            onMouseEnter={() => { setIsBackdropActive(true) }}
                        // onMouseLeave={() => { setIsBackdropActive(false) }}
                        >
                            {isBackdropActive && <ProfileActionList anchor='bottom' />}
                            {
                                !isLoggedIn ?
                                    <Link to='/login'>
                                        <HeaderActions primary='Hello, Sign In' secondary='Accounts & Lists' />
                                    </Link>
                                    : <HeaderActions primary={`Hello, ${user.name}`} secondary='Accounts & Lists' />
                            }
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
                        <span className='p-2'>
                            <Link to='/checkout' className='mb-4'>
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
