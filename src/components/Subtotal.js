import React from 'react'
import { useUserContext } from '../context/UserStateProvider'

function Subtotal() {
    const { userState } = useUserContext()
    return (
        <div className='flex flex-col justify-between w-[300px] h-[100px] p-4 bg-[#F3F3F3] border'>
            <div>
                <p>{`Subtotal (${userState.basket.length} ${userState.basket.length === 1 ? 'item' : 'items'}) : `} <strong>{`£0`}</strong>
                </p>
                <small className='flex items-center'>
                    <input type='checkbox' className='mr-2' /> This order contains a gift
                </small>
            </div>
            <button className='w-full h-[30px] mt-2 rounded-sm bg-[#FEBD69] hover:bg-[#F5A946] border border-[#A88734]'>Proceed to checkout </button>
        </div>
    )
}

export default Subtotal
