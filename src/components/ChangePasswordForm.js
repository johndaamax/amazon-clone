import { useState, useRef } from 'react'
import { useAuthContext } from '../context/AuthProvider'
import { validatePassword } from '../validationRules';
import { changePassword } from '../api/api'

function ChangePasswordForm() {
    const [inputFieldErrors, setInputFieldErrors] = useState({});
    const [error, setError] = useState(null);
    const { token } = useAuthContext();

    const changePasswordInputRef = useRef();

    async function handleResetPassword(e) {
        e.preventDefault();
        setError(null);
        const password = changePasswordInputRef.current.value;
        const errors = {
            ...validatePassword(password)
        };
        setInputFieldErrors(prevError => ({ ...prevError, ...errors }));
        if (errors.password) {
            changePasswordInputRef.current.focus();
        } else {
            const data = changePassword({ idToken: token, password });
            if (!data.error) {
                //show message to user that password was changed successfully and redirect to home page after some seconds ( or have a button to click)
            } else {
                setError(data.error)
            }
        }
    }

    return (
        <section className='w-[350px] mx-auto my-0'>
            <div className='px-4 py-3 rounded-md bg-white border border-gray-300'>
                <h1 className='text-3xl pb-1 mb-3'>Change password</h1>
                <form onSubmit={handleResetPassword}>
                    <div className='flex flex-col mb-4'>
                        <label className='pb-1 text-sm font-bold tracking-wide' htmlFor='changePassword'>Change Password</label>
                        <input
                            ref={changePasswordInputRef}
                            className={`w-full px-2 py-1 outline-none border ${inputFieldErrors.password ? 'input-error' : 'border-gray-400'} rounded-sm focus:shadow-input focus:border-[#E77600]`}
                            type='password'
                            id='changePassword'
                            onChange={() => inputFieldErrors.password && setInputFieldErrors({})}
                        />
                        <div className={`${inputFieldErrors.password ? 'block' : 'hidden'} text-red-500 text-xs`}>
                            {inputFieldErrors.password}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button
                            type='submit'
                            className='w-full rounded-md px-2 py-1 border border-gray-700 bg-button-primary focus:outline-none focus:shadow-input active:button-active'>Change Password</button>
                    </div>
                    {error &&
                        <div>
                            <p className='text-red-500 text-sm'>{error}</p>
                        </div>
                    }
                </form>
            </div>
        </section>
    )
}

export default ChangePasswordForm
