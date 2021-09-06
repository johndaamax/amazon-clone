import React from 'react'

function HeaderActions({ primary, secondary }) {
    return (
        <div className='flex flex-col whitespace-nowrap px-2'>
            <span className='text-xs text-gray-100'>
                {primary}
            </span>
            <span className='text-sm text-white font-bold'>
                {secondary}
            </span>
        </div>
    )
}

export default HeaderActions
