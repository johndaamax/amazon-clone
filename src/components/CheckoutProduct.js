import { useBasketContext, removeFromBasket, setQuantity } from '../context/BasketProvider';
import { ratingMap } from '../helpers/ratingStarHelper';
import Dropdown from './Dropdown';

function CheckoutProduct({ id, title, image, price, rating }) {
    const { basket, dispatch } = useBasketContext();
    const ratingCoords = ratingMap.get(rating);
    const quantity = basket.find(item => item.id === id).quantity;

    function handleQuantityChange(id, quantity) {
        if (quantity <= 0) {
            removeFromBasket(dispatch, id)
        } else if (quantity < 10) {
            setQuantity(dispatch, id, quantity)
        } else {
            //TODO: have an input field where user can input a new quantity value
        }
    }

    return (
        <div className='flex p-3 bg-white border border-gray-300'>
            <div className='w-[150px] flex-shrink-0'>
                <img
                    className='m-auto w-auto max-h-[150px] object-cover'
                    src={image}
                    alt={title}
                />
            </div>
            <div className='pl-4'>
                <div className='space-y-1'>
                    <p className='md:text-lg'>{title}</p>
                    <p className='font-bold text-lg md:text-xl'>
                        <strong>${price.value}</strong>
                    </p>
                    <p className='text-sm text-success'>In stock</p>
                    <p className='text-sm text-secondary'>Eligible for FREE shipping</p>
                </div>
                <div className='flex my-2'>
                    <i
                        className='h-[18px] w-[80px]'
                        style={{
                            backgroundImage: `url(./rating.png)`,
                            backgroundPosition: `${ratingCoords.xPos}px ${ratingCoords.yPos}px`,
                            backgroundSize: '512px 256px'
                        }}>
                    </i>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-start md:divide-x divide-gray-400 divide-opacity-40'>
                    <span className='mb-3 md:mr-3 md:mb-0'>
                        <Dropdown
                            title={`Qty: ${quantity}`}
                            list={['0 (Delete)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']}
                            handleChangedIndex={(index) => handleQuantityChange(id, index)}
                            selectedIndex={quantity}
                        />
                    </span>
                    <button
                        className='mb-3 md:mb-0 px-2 lg:px-4 text-sm text-blue-700 hover:underline'
                        onClick={() => removeFromBasket(dispatch, id)}>Delete
                    </button>
                    <button className='px-2 lg:px-4 text-sm text-blue-700 hover:underline'>Save for later</button>
                    {/* <input
                        type='text'
                        maxLength='3'
                        autoComplete='off'
                        name='quantityBox'
                        className={`${classes}`} /> */}
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
