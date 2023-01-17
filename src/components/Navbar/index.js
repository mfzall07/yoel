import React, { useState } from 'react'
import { TamaCipta } from '../../assets'
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    const [mobileShow, setMobileShow] = useState(false)

    return (
        <div className='sticky top-0 z-50'>
            <div className='flex items-center justify-between px-5 lg:px-16 py-3 bg-white shadow-md'>
                <div className='flex items-center gap-2'>
                    <img src={TamaCipta} width={50}/>
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>TRUEtalent</h1>
                </div>
                <div className='hidden lg:flex items-center gap-5 '>
                    <a href='#home' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Home</a>
                    <a href='#about' className={`text-sm text-gray-400 hover:text-[#00989D]`}>About</a>
                    <a href='#service' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Service</a>
                    <a href='#client' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Client</a>
                    <a href='#contact' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Contact Us</a>
                </div>
                <button className='block lg:hidden text-xl' onClick={() => setMobileShow(!mobileShow)}>
                    <TiThMenu/>
                </button>
            </div>
            <div className={`block lg:hidden bg-white border shadow-sm rounded-b-2xl overflow-hidden ${!mobileShow ? 'h-0' : 'h-56'} transition-[height] duration-500 ease-in-out`}>
                <div className='flex lg:hidden flex-col items-center gap-5 my-5'>
                    <a href='#home' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Home</a>
                    <a href='#about' className={`text-sm text-gray-400 hover:text-[#00989D]`}>About</a>
                    <a href='#service' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Service</a>
                    <a href='#client' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Client</a>
                    <a href='#contact' className={`text-sm text-gray-400 hover:text-[#00989D]`}>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar