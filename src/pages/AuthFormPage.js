import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import ChangePasswordForm from '../components/ChangePasswordForm'

function AuthFormPage({ login }) {
    return (
        <div className='flex flex-col justify-center items-center p-4 my-0 mx-auto font-display w-[350px] md:w-[700px]'>
            <div className='mb-4 max-w-[120px] px-2'>
                <Link to='/'>
                    <img
                        className='max-w-[120px]'
                        src='./Amazon-Logo.svg'
                        alt='Amazon Logo'
                    />
                </Link>
            </div>
            <div>
                {login ? <LoginForm /> : <ChangePasswordForm />}
            </div>
        </div>
    )
}

export default AuthFormPage
