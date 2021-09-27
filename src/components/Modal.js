import React from 'react'

function Modal({ children }) {
    return (
        <div className='absolute inset-0 opacity-20'>
            {children}
        </div>
    )
}

export default Modal
