import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAuthContext, logout } from '../context/AuthProvider';

function ProfileActionList({ anchor }) {
    const { token, dispatch } = useAuthContext();
    function logoutUser() {
        logout(dispatch);
    }

    const isLoggedIn = !!token;
    const positionClasses = clsx(
        anchor === 'top' && `-bottom-full left-0 right-0`,
        anchor === 'bottom' && `top-full left-0 right-0`
    )
    return (
        <div className={`p-4 rounded-sm bg-white absolute z-20 whitespace-nowrap font-display ${positionClasses}`}>
            {!isLoggedIn &&
                <div className='pb-4 border-b border-gray-200 text-center'>
                    <Link to='/login'
                        className='nav-action-button'>Login
                    </Link>
                </div>
            }
            <div>
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
