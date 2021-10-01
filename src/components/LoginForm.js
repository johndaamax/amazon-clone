import { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { omit } from 'lodash'

import { validateName, validateEmail, validatePassword } from '../validationRules';
import { loginWithEmail, signupNewUser } from '../api/api';
import { useAuthContext, login } from '../context/AuthProvider'

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [inputFieldErrors, setInputFieldErrors] = useState({});
    const [error, setError] = useState(null)
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const history = useHistory()

    console.log(error)

    const { dispatch } = useAuthContext();

    function toggleAuthMode() {
        //toggle between login and signup forms
        setIsLogin(prevMode => !prevMode);
        setInputFieldErrors({});
        if (nameInputRef && nameInputRef.current)
            nameInputRef.current.value = '';
        if (emailInputRef && emailInputRef.current)
            emailInputRef.current.value = '';
        if (passwordInputRef && passwordInputRef.current)
            passwordInputRef.current.value = '';
    }

    async function submitLoginHandler(event) {
        event.preventDefault();
        setError(null);
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const errors = {
            ...validateEmail(email),
            ...validatePassword(password)
        }
        setInputFieldErrors(prevError => ({ ...prevError, ...errors }));
        if (errors.email) {
            emailInputRef.current.focus()
        }
        else if (errors.password) {
            passwordInputRef.current.focus()
        } else {
            // no errors, proceed with login
            const data = await loginWithEmail({ email, password })
            console.log(data)
            if (data.error) {
                setError(data.error);
            } else {
                const payload = {
                    user: {
                        name: data.user.name,
                        email: data.user.email
                    },
                    token: data.user.idToken
                }
                login(dispatch, payload)
                history.push('/')
            }
        }
    }
    async function submitSignupHandler(event) {
        event.preventDefault();
        setError(null);
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const errors = {
            ...validateName(name),
            ...validateEmail(email),
            ...validatePassword(password)
        }
        setInputFieldErrors(prevError => ({ ...prevError, ...errors }));

        if (errors.name) {
            nameInputRef.current.focus()
        }
        else if (errors.email) {
            emailInputRef.current.focus()
        }
        else if (errors.password) {
            passwordInputRef.current.focus()
        } else {
            const data = await signupNewUser({ name, email, password })
            if (data.error) {
                setError(data.error)
            } else {
                const payload = {
                    user: {
                        name: data.user.name,
                        email: data.user.email
                    },
                    token: data.user.idToken
                }
                login(dispatch, payload)
                history.push('/')
            }
        }
    }

    return (
        <section className='w-[350px] mx-auto my-0'>
            <div className='px-4 py-3 rounded-md bg-white border border-gray-300'>
                <h1 className='text-3xl pb-1 mb-3'>{isLogin ? `Login` : `Create account`} </h1>
                <form onSubmit={isLogin ? submitLoginHandler : submitSignupHandler}>
                    {!isLogin &&
                        <div className='flex flex-col mb-4'>
                            <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='name'>Your name</label>
                            <input
                                ref={nameInputRef}
                                className={`w-full px-2 py-1 outline-none border ${inputFieldErrors.name ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                                type='text'
                                id='name'
                                onChange={() => inputFieldErrors.name && setInputFieldErrors(prevError => (omit(prevError, ['name'])))}
                            />
                            <div className={`${inputFieldErrors.name ? 'block' : 'hidden'} text-red-500 text-xs`}>
                                {inputFieldErrors.name}
                            </div>
                        </div>
                    }
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='email'>Email</label>
                        <input
                            ref={emailInputRef}
                            className={`w-full px-2 py-1 outline-none border ${inputFieldErrors.email ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='email'
                            id='email'
                            maxLength={64}
                            onChange={() => { inputFieldErrors.email && setInputFieldErrors(prevError => (omit(prevError, ['email']))) }}
                        />
                        <div className={`${inputFieldErrors.email ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {inputFieldErrors.email}
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='password'>Password</label>
                        <input
                            ref={passwordInputRef}
                            className={`w-full px-2 py-1 outline-none border ${inputFieldErrors.password ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='password'
                            placeholder='Password'
                            id='password'
                            onChange={() => { inputFieldErrors.password && setInputFieldErrors(prevError => (omit(prevError, ['password']))) }}
                        />
                        <div className={`${inputFieldErrors.password ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {inputFieldErrors.password}
                        </div>
                    </div>
                    <div>
                        <div className='mb-4'>
                            <button
                                type='submit'
                                className='w-full rounded-md px-2 py-1 border border-gray-700 bg-button-primary focus:outline-none focus:shadow-input active:button-active'>{isLogin ? `Login` : `Create account`}</button>
                        </div>
                        {error &&
                            <div>
                                <p className='text-red-500 text-sm'>{error}</p>
                            </div>
                        }
                        <hr />
                        <div className='mt-2 mb-4'>
                            <p className='text-xs'>{`By creating an account, you agree to Amazon's `}
                                <Link className='link-minor text-xs text-blue-500' to='#'>Conditions of Use</Link>
                                {` and `}
                                <Link className='link-minor text-xs text-blue-500' to='#'> Privacy Notice</Link>
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

export default LoginForm
