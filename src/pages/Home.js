import Product from "../components/Product"

function Home() {
    return (
        <div className='max-w-[1536px] mx-auto'>
            <img
                className='w-full z-[-1] mb-[-150px]'
                src='/banner.jpg'
                alt='Banner' />
            <Product id={1} title='A test' rating={4} price={23.99} image=''
            />
        </div>
    )
}

export default Home
