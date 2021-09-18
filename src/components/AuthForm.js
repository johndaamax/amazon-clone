import { useState } from 'react'

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)

    function switchAuthMode() {
        setIsLogin(!isLogin)
    }

    return (
        <section className='w-[350px] mx-auto my-0'>
            <div className='px-4 py-3 rounded-md bg-white border border-gray-300'>
                <h1 className='text-3xl pb-1 mb-3'>{isLogin ? `Login` : `Create account`} </h1>
                <form>
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='name'>Your name</label>
                        <input className='w-full px-2 py-1 outline-none border border-gray-900 rounded-md focus:shadow-input focus:border-[#E77600]' type='text' id='name' />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm font-bold tracking-wide' htmlFor='email'>Email</label>
                        <input className='w-full px-2 py-1 outline-none border border-gray-900 rounded-md focus:shadow-input focus:border-[#E77600]' type='email' id='email' />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='text-sm font-bold tracking-wide' htmlFor='password'>Password</label>
                        <input className='w-full px-2 py-1 outline-none border border-gray-900 rounded-md focus:shadow-input focus:border-[#E77600]' type='password' placeholder='Password' id='password' />
                    </div>
                    <div>
                        <div className='mb-4'>
                            <button className='w-full rounded-md p-2 border border-gray-700 bg-button-primary focus:outline-none focus:shadow-input'>{isLogin ? `Login` : `Create account`}</button>
                        </div>
                        <button
                            type='button'
                            onClick={switchAuthMode}
                        >{isLogin ? `Create new account` : `Sign in with existing account`}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AuthForm
