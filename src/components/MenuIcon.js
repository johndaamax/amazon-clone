
function MenuIcon({ visible, toggle }) {
    return (
        <div className='z-10 cursor-pointer' onClick={toggle}>
            <div className='w-[25px] h-[3px] bg-white my-1 z-10 rounded-md' />
            <div className='w-[25px] h-[3px] bg-white my-1 z-10 rounded-md' />
            <div className='w-[25px] h-[3px] bg-white my-1 z-10 rounded-md' />
        </div>
    )
}
export default MenuIcon
