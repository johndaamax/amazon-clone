import React from 'react'
import CheckoutProduct from '../components/CheckoutProduct'
import Subtotal from '../components/Subtotal'
import { useUserContext } from '../context/UserStateProvider'

function Checkout() {
    const { userState } = useUserContext()
    console.log(userState.basket)
    return (
        <div className='flex p-6 bg-white h-max'>
            <div>
                <img
                    className='w-full mb-2'
                    src='./ad.jpg'
                    alt='checkout page banner ad' />
                {userState.basket.length === 0 ?
                    <div className='mr-3 p-3 border-b border-gray-300'>
                        <h2 className='font-bold text-xl'>Your basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click 'Add to Basket' on a product in the home page.</p>
                    </div> :
                    <div>
                        <h2 className='font-bold text-xl'>Your shopping basket</h2>
                        <div>
                            {userState.basket.map(item =>
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />)}
                        </div>
                    </div>
                }
            </div>
            {userState.basket.length > 0 &&
                <div>
                    <Subtotal />
                </div>
            }
        </div>
    )
}

export default Checkout
