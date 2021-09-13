import Product from "../components/Product"

function Home() {
    return (
        <div className='max-w-[1536px] mx-auto'>
            <img
                className='w-full z-[-1] mb-[-150px] min-w-[762px]'
                src='/banner.jpg'
                alt='Banner' />
            <div className='flex z-[1] mx-4'>
                <Product
                    id={1}
                    title='A test'
                    rating={4}
                    price={23.99}
                    image=''
                />
                <Product
                    id={2}
                    title='A test 2'
                    rating={2}
                    price={213.99}
                    image=''
                />
            </div>

        </div>
    )
}

export default Home
