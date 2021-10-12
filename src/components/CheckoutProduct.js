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
        <div className='flex my-3 py-4 bg-white border-b border-gray-300'>
            <div className='w-[180px]'>
                <img
                    className='m-auto w-auto max-h-[180px] object-cover'
                    src={image}
                    alt={title}
                />
            </div>
            <div className='pl-4'>
                <p className='text-lg font-bold'>{title}</p>
                <p className='font-bold text-xl'>
                    <small>$</small>
                    <strong>{price.value}</strong>
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
                <div className='max-w-[110px]'>
                    <Dropdown
                        title={`Qty: ${quantity}`}
                        list={['0 (Delete)', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']}
                        handleChangedIndex={(index) => handleQuantityChange(id, index)}
                    />
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
