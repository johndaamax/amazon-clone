import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../components/CheckoutProduct'
import Subtotal from '../components/Subtotal'
import { useAuthContext } from '../context/AuthProvider'
import { useBasketContext } from '../context/BasketProvider'

function Checkout() {
    const { basket } = useBasketContext();
    const { token } = useAuthContext();
    const totalItems = basket.reduce((acc, cv) => acc + cv.quantity, 0);
    const totalPrice = basket.reduce((acc, cv) => acc + cv.quantity * cv.price.value, 0);
    const isLoggedIn = !!token;
    console.log(basket);
    return (
        <div className='font-body'>
            <div>
                <img
                    className='mb-2 oblect-contain'
                    src='./ad.jpg'
                    alt='checkout page banner ad' />
            </div>
            {basket.length === 0 ?
                <div className='flex p-6 border-b border-gray-300 w-full space-x-6'>
                    <div className='w-[30%] space-x-2'>
                        <img src={isLoggedIn ? './rolling_cart.svg' : './checkout_fluff.svg'} alt='Checkout Fluff' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-bold text-xl lg:text-3xl'>Your Amazon Basket is empty</h2>
                        <Link to='/' className='link-minor text-blue-500'>Shop today's deals </Link>
                        {!isLoggedIn &&
                            <div className='my-4 space-x-6'>
                                <button className='py-1 px-2 bg-[#FFD814] hover:bg-[#F0CC18] rounded-lg border border-[#FCD200]'>
                                    <Link to='/login'>Sign in to your account</Link>
                                </button>
                                <button className='py-1 px-2 hover:bg-[#F3F3F3] rounded-lg border border-[#D5D9D9] shadow-md'>
                                    <Link to='/register'>Sign up now</Link>
                                </button>
                            </div>
                        }
                    </div>
                </div> :
                <div className='flex flex-col-reverse md:flex-row border-b border-gray-300'>
                    <div className='bg-white px-6 py-2 md:mr-4 md:w-[70%]'>
                        <div className='py-2 border-b border-gray-300'>
                            <h1 className='text-3xl'>Shopping basket</h1>
                        </div>
                        <div className='py-4 grid gap-2'>
                            {basket.map(item =>
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
                    <aside className='float-right md:w-[30%]'>
                        <Subtotal price={totalPrice} quantity={totalItems} />
                    </aside>
                </div>
            }
        </div>
    )
}

export default Checkout
