import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { omit } from 'lodash'

import { validateName, validateEmail, validatePassword } from '../validationRules'

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState({});
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function toggleAuthMode() {
        //toggle between login and signup forms
        setIsLogin(prevMode => !prevMode);
        setError({});
        if (nameInputRef && nameInputRef.current)
            nameInputRef.current.value = '';
        if (emailInputRef && emailInputRef.current)
            emailInputRef.current.value = '';
        if (passwordInputRef && passwordInputRef.current)
            passwordInputRef.current.value = '';
    }

    async function submitLoginHandler(event) {
        event.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const errors = {
            ...validateEmail(email),
            ...validatePassword(password)
        }
        setError(prevError => ({ ...prevError, ...errors }));
        if (errors.email) {
            emailInputRef.current.focus()
        }
        else if (errors.password) {
            passwordInputRef.current.focus()
        } else {
            // login a user
            try {
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBCrSP5h4_qgJqlV5A44iWnkH439bvqsyU', { method: 'POST' })
                if (response.ok) {
                    // const data = await response.json()
                }
            } catch (error) {

            }
        }
    }
    async function submitSignupHandler(event) {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const errors = {
            ...validateName(name),
            ...validateEmail(email),
            ...validatePassword(password)
        }
        setError(prevError => ({ ...prevError, ...errors }));

        if (errors.name) {
            nameInputRef.current.focus()
        }
        else if (errors.email) {
            emailInputRef.current.focus()
        }
        else if (errors.password) {
            passwordInputRef.current.focus()
        } else {
            //sign up a new user
            try {
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBCrSP5h4_qgJqlV5A44iWnkH439bvqsyU', { method: 'POST' })
                if (response.ok) {
                    // const data = await response.json()
                }
            } catch (error) {

            }
        }
    }

    return (
        <section className='w-[350px] mx-auto my-0'>
            <div className='px-4 py-3 rounded-md bg-white border border-gray-300'>
                <h1 className='text-3xl pb-1 mb-3'>{isLogin ? `Login` : `Create account`} </h1>
                <form onSubmit={isLogin ? submitLoginHandler : submitSignupHandler}>
                    {!isLogin && <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='name'>Your name</label>
                        <input
                            ref={nameInputRef}
                            className={`w-full px-2 py-1 outline-none border ${error.name ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='text'
                            id='name'
                            onChange={() => error.name && setError(prevError => (omit(prevError, ['name'])))}
                        />
                        <div className={`${error.name ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {error.name}
                        </div>
                    </div>
                    }
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='email'>Email</label>
                        <input
                            ref={emailInputRef}
                            className={`w-full px-2 py-1 outline-none border ${error.email ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='email'
                            id='email'
                            maxLength={64}
                            onChange={() => { error.email && setError(prevError => (omit(prevError, ['email']))) }}
                        />
                        <div className={`${error.email ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {error.email}
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='password'>Password</label>
                        <input
                            ref={passwordInputRef}
                            className={`w-full px-2 py-1 outline-none border ${error.password ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='password'
                            placeholder='Password'
                            id='password'
                            onChange={() => { error.password && setError(prevError => (omit(prevError, ['password']))) }}
                        />
                        <div className={`${error?.password ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {error.password}
                        </div>
                    </div>
                    <div>
                        <div className='mb-4'>
                            <button
                                type='submit'
                                className='w-full rounded-md px-2 py-1 border border-gray-700 bg-button-primary focus:outline-none focus:shadow-input active:button-active'>{isLogin ? `Login` : `Create account`}</button>
                        </div>
                        <div className='mt-2 mb-4'>
                            <p className='text-xs'>{`By creating an account, you agree to Amazon's `}
                                <Link className='link-minor text-xs' to='#'>Conditions of Use</Link>
                                {` and `}
                                <Link className='link-minor text-xs' to='#'> Privacy Notice</Link>
                                {`.`}
                            </p>
                        </div>
                        <button
                            type='button'
                            onClick={toggleAuthMode}
                        >{isLogin ? `Create new account` : `Sign in with existing account`}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AuthForm
