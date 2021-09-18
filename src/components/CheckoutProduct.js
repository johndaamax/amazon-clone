import { useUserContext, removeFromBasket } from '../context/UserStateProvider';
import { ratingMap } from '../helpers/ratingStarHelper';

function CheckoutProduct({ id, title, image, price, rating }) {
    const { dispatch } = useUserContext();
    const ratingCoords = ratingMap.get(rating);

    return (
        <div className='flex my-3 bg-white border-b border-gray-300'>
            <img
                className='object-contain w-[180px] h-[180px]'
                src={image}
                alt={title}
            />
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
