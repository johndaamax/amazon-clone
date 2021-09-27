import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext, logout } from '../context/AuthProvider'

function ProfileActionList() {
    const { dispatch } = useAuthContext()
    function logoutUser() {
        logout(dispatch)
    }
    return (
        <div className='py-2 px-4 rounded-sm bg-white absolute z-20 top-[60px] whitespace-nowrap font-display cursor-default'>
            <h3 className='font-bold text-lg mb-2'>Your Account </h3>
            <ul className='text-xs'>
                <li><Link to='/changePassword' className='link-minor'>Change Password</Link></li>
                <li className='link-minor' onClick={logoutUser}>Logout</li>
            </ul>
        </div>
    )
}

export default ProfileActionList
