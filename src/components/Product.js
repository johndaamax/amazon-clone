import React from 'react'
import { useUserContext, addToBasket } from '../context/UserStateProvider'
import { ratingMap } from '../helpers/ratingStarHelper'

function Product({ id, title, image, price, rating, shippingWeight }) {
    const { userState, dispatch } = useUserContext();
    const ratingCoords = ratingMap.get(rating)

    const getProductQuantityInBasket = () => {
        return userState.basket.filter(prod => prod.id === id).length;
    }

    const productsInBasket = getProductQuantityInBasket()

    return (
        <div className='flex flex-col m-4 min-w-[180px] bg-white p-4 z-[1]'>
            <div className='m-auto w-[180px]'>
                <img
                    className='m-auto w-auto max-h-[180px] object-cover'
                    src={image}
                    alt='' />
            </div>
            <div className='my-4'>
                <p>{title}</p>
                <p className='mt-2 text-lg'>
                    <sup>$</sup>
                    <strong>{Math.floor(price.value)}</strong>
                    <sup>{(price.value % 1).toFixed(2).substring(2)}</sup>
                </p>
                <div className='flex'>
                    <i
                        className='h-[18px] w-[80px]'
                        style={{
                            backgroundImage: `url(./rating.png)`,
                            backgroundPosition: `${ratingCoords.xPos}px ${ratingCoords.yPos}px`,
                            backgroundSize: '512px 256px'
                        }}>
                    </i>
                </div>
                <p>{`Shipping Weight: ${shippingWeight.value} ${shippingWeight.unit}`}</p>
            </div>
            <button
                className='p-1 rounded-sm bg-[#FEBD69] hover:bg-[#F5A946] border border-solid border-[#A88734]'
                onClick={() => addToBasket(dispatch, { id, title, image, price, rating })}
            >{productsInBasket > 0 ? `Added to basket (x${productsInBasket})` : `Add to basket`}
            </button>
        </div>
    )
}

export default Product
