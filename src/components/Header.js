import { Link } from 'react-router-dom'
import HeaderActions from './HeaderActions'

import { useBasketContext } from '../context/BasketProvider'
import { useAuthContext } from '../context/AuthProvider'

function Header() {
    const { basket } = useBasketContext();
    const { user, token } = useAuthContext();

    const isLoggedIn = !!token;
    return (
        <header className='static top-0 font-display'>
            <nav className='py-2 px-4 flex bg-[#131A22] space-x-6'>
                <div id='nav-logo'>
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
                <div className='flex space-x-4'>
                    {
                        !isLoggedIn ?
                            <Link to='/login'>
                                <HeaderActions primary='Hello, Sign In' secondary='Accounts & Lists' />
                            </Link>
                            : <HeaderActions primary={`Hello, ${user.name}`} secondary='Accounts & Lists' />
                    }
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
            </nav>
        </header>
    )
}

export default Header
