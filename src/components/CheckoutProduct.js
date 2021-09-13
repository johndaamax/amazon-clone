import React from 'react'
import { useUserContext, removeFromBasket } from '../context/UserStateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const { dispatch } = useUserContext();

    return (
        <div className='flex my-3 bg-white'>
            <img
                className='object-contain w-[180px] h-[180px]'
                src={image}
                alt={title}
            />
            <div className='pl-4'>
                <p className='text-lg font-bold'>{title}</p>
                <p>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className='flex'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => <p key={Math.random() * 5000}>⭐</p>)
                    }
                </div>
                <button
                    className='px-2 py-1 mt-2 rounded-md bg-[#FEBD69] hover:bg-[#F5A946] border border-solid border-[#A88734]'
                    onClick={() => { removeFromBasket(dispatch, id) }}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
