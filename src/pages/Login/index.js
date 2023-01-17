import React from 'react'
import { Sean } from '../../assets'

const Login = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <div className='flex flex-col border w-96 h-96 rounded-xl bg-white shadow-md'>
                <div style={{ backgroundImage: `url(${Sean})` }} className='w-full h-36 bg-cover rounded-t-xl shadow-sm bg-no-repeat'/>
                <div className='p-5'>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input type='text' name='floating_username' id='floating_username' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                        <label for='floating_username' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input type='text' name='password' id='password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                        <label for='password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                    </div>
                    <div className='flex items-center justify-center mt-10'>
                        <button className='bg-[#00989D] hover:bg-[#00985E] px-3 py-2 rounded-lg shadow-sm text-sm text-white font-semibold w-full'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login