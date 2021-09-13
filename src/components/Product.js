import React from 'react'
import { useUserContext, addToBasket } from '../context/UserStateProvider'

function Product({ id, title, image, price, rating }) {
    const { dispatch } = useUserContext();

    return (
        <div className='flex flex-col justify-end m-4 max-h-[400px] min-w-[180px] bg-white p-4 z-[1]'>
            <div className='h-[100px] mb-4'>
                <p>{title}</p>
                <p className='mt-2'>
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
            </div>
            <img
                className='max-h-[200px] w-full object-contain mb-4'
                src={image}
                alt='' />
            <button
                className='px-2 py-1 rounded-md bg-[#FEBD69] hover:bg-[#F5A946] border border-solid border-[#A88734]'
                onClick={() => addToBasket(dispatch, { id, title, image, price, rating })}
            >Add to basket
            </button>
        </div>
    )
}

export default Product
