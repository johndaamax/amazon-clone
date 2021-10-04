import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAuthContext, logout } from '../context/AuthProvider';

function ProfileActionList({ anchor }) {
    const { token, dispatch } = useAuthContext();
    const isLoggedIn = !!token;
    const positionClasses = clsx(
        anchor === 'top' && `-bottom-full left-0 right-0`,
        anchor === 'bottom' && `top-full left-0 right-0`
    );

    function logoutUser() {
        logout(dispatch);
        window.location.href = '/';
    }

    return (
        <div className={`min-w-min p-4 rounded-sm bg-white absolute z-20 whitespace-nowrap font-display ${positionClasses}`}>
            {!isLoggedIn &&
                <div className='pb-2 border-b border-gray-200 text-center'>
                    <Link to='/login'
                        className='nav-action-button'>Login
                    </Link>
                    <div className='text-center text-xs my-2'>
                        {`New customer? `}<Link to='/register' className='link-minor text-blue-400'>Start here.</Link>
                    </div>
                </div>
            }
            <div className='mt-2'>
                <h3 className='font-bold text-lg mb-2'>Your Account </h3>
                {isLoggedIn &&
                    <ul className='text-xs'>
                        <li><Link to='/changePassword' className='link-minor'>Change Password</Link></li>
                        <li className='link-minor' onClick={logoutUser}>Logout</li>
                    </ul>
                }
                {!isLoggedIn &&
                    <ul className='text-xs'>
                        <li><Link to='#' className='link-minor'>Your Account</Link></li>
                        <li><Link to='#' className='link-minor'>Your Orders</Link></li>
                        <li><Link to='#' className='link-minor'>Your Recommendations</Link></li>
                        <li><Link to='#' className='link-minor'>Your Subscribe & Save Items</Link></li>
                        <li><Link to='#' className='link-minor'>Your Prime</Link></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default ProfileActionList
