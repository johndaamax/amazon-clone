import React from 'react'

function Product({ id, title, image, price, rating }) {
    return (
        <div className='flex flex-col justify-end items-center m-4 max-h-[400px] min-w-[100px] bg-white p-6 z-10 '>
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
                            .map((_) => <p>⭐</p>)
                    }
                </div>
            </div>
            <img
                className='max-h-[200px] w-full object-contain mb-4'
                src={image}
                alt='' />
            <button className='px-2 py-1 rounded-md bg-[#F0C14B] border border-solid border-[#A88734] '>Add to basket</button>
        </div>
    )
}

export default Product
