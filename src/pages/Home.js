import { useState, useEffect, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useProductsContext } from '../context/ProductsProvider';

import CategoryList from '../components/CategoryList';

function Home() {
    const [products, setProducts] = useProductsContext();
    const [error, setError] = useState(null);
    const productCategoriesList = ['Toys & Games', 'Video Games', 'Home & Kitchen'];
    const fetchProducts = useCallback(async () => {
        if (products.length === 0) {
            try {
                setError(null);
                const response = await fetch('https://clone-c6d4c-default-rtdb.europe-west1.firebasedatabase.app/products.json')
                if (!response.ok) {
                    throw new Error('Unable to fetch products from the database.')
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        }
    }, [products, setProducts])

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
                productCategoriesList.map(item => <CategoryList key={item} list={products.filter(p => p.category === item)} title={item} />)
            }
            <div className='w-full' aria-label='Back to top'>
                <HashLink to='#nav-top'>
                    <div className='w-full bg-[#37475A] text-sm text-center py-4 text-white hover:bg-[#485769]'>Back to top</div>
                </HashLink>
            </div>
        </div>
    )
}

export default Home
