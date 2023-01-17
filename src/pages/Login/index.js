import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../Api'
import { Sean } from '../../assets'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const navigation = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const toastSuccess = () => {
        toast.success('Login Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    
    const toastError = () => {
        toast.error('Login Failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const login = async () => {
        try {
            const response = await Api.login(username, password)
            toastSuccess()
            setTimeout(() => {
                navigation('/dashboard')
            }, 5000);
        } catch (error) {
            toastError()
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className='flex items-center justify-center w-screen h-screen'>
                <div className='flex flex-col border w-96 h-96 rounded-xl bg-white shadow-md'>
                    <div style={{ backgroundImage: `url(${Sean})` }} className='w-full h-36 bg-cover rounded-t-xl shadow-sm bg-no-repeat'/>
                    <div className='p-5'>
                        <div className='relative z-0 w-full mb-6 group'>
                            <input type='text' name='floating_username' id='floating_username' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' value={username} onChange={ (value) => setUsername(value.target.value) } placeholder=' ' required />
                            <label htmlFor='floating_username' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                            <input type='password' name='password' id='password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' value={password} onChange={ (value) => setPassword(value.target.value) } placeholder=' ' required />
                            <label htmlFor='password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            <button className='bg-[#00989D] hover:bg-[#00985E] px-3 py-2 rounded-lg shadow-sm text-sm text-white font-semibold w-full' onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login