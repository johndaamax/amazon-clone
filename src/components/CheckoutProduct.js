import { useBasketContext, removeFromBasket } from '../context/BasketProvider';
import { ratingMap } from '../helpers/ratingStarHelper';

function CheckoutProduct({ id, title, image, price, rating }) {
    const { dispatch } = useBasketContext();
    const ratingCoords = ratingMap.get(rating);

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
                <p>
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
                <button
                    className='p-1 mt-2 rounded-sm bg-[#FEBD69] hover:bg-[#F5A946] border border-solid border-[#A88734]'
                    onClick={() => { removeFromBasket(dispatch, id) }}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
