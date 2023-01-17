import React from 'react'
import { TamaCipta } from '../../assets'
import { ImLocation } from 'react-icons/im'
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='p-5 lg:p-16 bg-[#AEE3EC]'>
            <div className='flex flex-col lg:grid grid-cols-12 gap-10'>
                <div className='col-span-5 w-full'>
                    <div className='flex items-center gap-2'>
                        <img src={TamaCipta} width={50}/>
                        <h1 style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>TRUEtalent</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <ImLocation className='text-9xl text-white'/>
                        <h1 className='text-xs text-black'>BSD Office 99, Gedung EduCenter lt.2 Unit 24055 Sekolah Foresta No. 8, BSD City, Kel. Lengkong Kulon Kec. Pagedangan – Kab Tangerang, Banten 15331 Indonesia</h1>
                    </div>
                    <h1 className='text-black text-sm hidden lg:block'>Companiesfact</h1>
                </div>
                <div className='col-span-5 w-full'>
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>Link</h1>
                    <div className='grid grid-cols-12'>
                        <ul className='list-none text-sm list-inside space-y-3 mt-7 col-span-4'>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#home'>Home</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#about'>About</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#service'>Service</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#client'>Client</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#contact'>Contact Us</a>
                            </li>
                        </ul>
                        <ul className='list-none text-sm list-inside space-y-3 mt-7 col-span-4'>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href=''>Industry Expertise</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#about'>Insights</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#service'>People</a>
                            </li>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href='#client'>Offices</a>
                            </li>
                        </ul>
                        <ul className='list-none text-white text-sm list-inside space-y-3 mt-7 col-span-4'>
                            <li className='text-white hover:text-[#00989D]'>
                                <a href=''>Careers @Truetalent</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-2 w-full'>
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: 700 }}>Temukan Kami</h1>
                    <div className='flex items-center gap-3 mt-7'>
                        <IoLogoLinkedin className='text-2xl'/>
                        <AiFillInstagram className='text-2xl'/>
                        <IoLogoYoutube className='text-2xl'/>
                        <IoLogoWhatsapp className='text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer