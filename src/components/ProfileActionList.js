import { Link } from 'react-router-dom';
import { useAuthContext, logout } from '../context/AuthProvider';

function ProfileActionList() {
    const { dispatch } = useAuthContext();
    function logoutUser() {
        logout(dispatch);
    }
    return (
        <div className='py-2 px-4 rounded-sm bg-white absolute z-20 transform translate-y-2/4 whitespace-nowrap font-display'>
            <h3 className='font-bold text-lg mb-2'>Your Account </h3>
            <ul className='text-xs'>
                <li><Link to='/changePassword' className='link-minor'>Change Password</Link></li>
                <li className='link-minor' onClick={logoutUser}>Logout</li>
            </ul>
        </div>
    )
}

export default ProfileActionList
