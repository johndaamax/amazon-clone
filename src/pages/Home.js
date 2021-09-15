import { useState, useEffect, useCallback } from "react"
import Product from "../components/Product"

function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)
    console.log(products)
    const fetchProducts = useCallback(async () => {
        try {
            setError(null)
            const response = await fetch('https://clone-c6d4c-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            if (!response.ok) {
                throw new Error('Unable to fetch products from the database.')
            }
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError(error.message)
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    return (
        <div className='max-w-[1536px] mx-auto font-body'>
            <img
                id='banner-image'
                className='w-full z-[-1] mb-[-150px] min-w-[762px]'
                src='/banner.jpg'
                alt='Banner' />
            {error && <div className='mt-8 p-4 text-center text-red-600 text-xl'>{error}</div>}
            {products.length > 0 &&
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 my-2'>
                    {products.map(product => (
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
            }
        </div>
    )
}

export default Home
