
function Subtotal({ price, quantity }) {
    return (
        <div className='flex flex-col justify-between p-4 bg-[#F3F3F3] border'>
            <div>
                <p>{`Subtotal (${quantity} ${quantity === 1 ? 'item' : 'items'}) : `} <strong>{`$${price.toFixed(2)}`}</strong>
                </p>
                <small className='flex items-center'>
                    <input type='checkbox' className='mr-2' /> This order contains a gift
                </small>
            </div>
            <button className='md:w-max md:px-4 md:self-center h-[30px] mt-2 rounded-sm bg-[#FEBD69] hover:bg-[#F5A946] border border-[#A88734]'>Proceed to checkout </button>
        </div>
    )
}

export default Subtotal
