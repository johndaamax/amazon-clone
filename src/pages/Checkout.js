import React from 'react'
import CheckoutProduct from '../components/CheckoutProduct'
import { useUserContext } from '../context/UserStateProvider'

function Checkout() {
    const { userState } = useUserContext()
    console.log(userState.basket)
    return (
        <div>
            <img
                className=''
                src='' />
            {userState.basket.length === 0 ?
                <div>
                    <h2>Your basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click 'Add to Basket' on a product in the home page.</p>
                </div> :
                <div>
                    <h2>Your shopping basket</h2>
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
    )
}

export default Checkout
