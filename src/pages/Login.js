import { Link } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

function Login() {
    return (
        <div className='flex flex-col my-0 mx-auto font-display w-[350px] md:w-[700px]'>
            <Link to='/'>
                <img
                    className='mt-1 max-w-[120px] px-2'
                    src='./Amazon-Logo.svg'
                    alt='Amazon Logo'
                />
            </Link>
            <div>
                <AuthForm />
            </div>
        </div>
    )
}

export default Login
