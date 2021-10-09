import Product from './Product';

function CategoryList({ list, title }) {
    return (
        <div className='px-2 md:px-6 mb-8'>
            <h1 className='text-2xl md:text-4xl pl-6 md:pl-12'>{title}</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-2'>
                {list.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                        image={product.image}
                        shippingWeight={product.shippingWeight}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryList
