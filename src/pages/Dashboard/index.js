import React, { useEffect, useState } from 'react'
import { TamaCipta } from '../../assets'
import { RxDashboard } from 'react-icons/rx' 
import { BiGroup } from 'react-icons/bi' 
import { BsWhatsapp } from 'react-icons/bs' 
import Api from '../../Api'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigation = useNavigate()
    const [listContact, setListContact] = useState('')
    const [quotes, setQuotes] = useState('')
    const [quotesInput, setQuotesInput] = useState('')
    const [visi, setVisi] = useState('')
    const [visiInput, setVisiInput] = useState('')
    const [mission, setMission] = useState('')
    const [missionInput, setMissionInput] = useState('')


    const getContact = async () => {
        try {
            const resGetContact = await Api.GetContact()
            setListContact(resGetContact.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const resQuotes = await Api.GetQuotes() 
            setQuotes(resQuotes.data[0])
            const resVisi = await Api.GetVisi() 
            setVisi(resVisi.data[0])
            const resMission = await Api.GetMission() 
            setMission(resMission.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            const resLogout = await Api.logout()
            navigation('/')
        } catch (error) {
            
        }
    }

    const updateQuotes = async () => {
        try {
            const data = {
                nameQuotes: quotesInput
            }
            const response = await Api.UpdateQuotes(quotes.uuid, data)
            window.location.reload();
        } catch (error) {
            
        }
    }

    const updateMission = async () => {
        try {
            const data = {
                nameMission: missionInput
            }
            const response = await Api.UpddateMission(mission.uuid, data)
            window.location.reload();
        } catch (error) {
            
        }
    }
    
    const updateVisi = async () => {
        try {
            const data = {
                nameVisi: visiInput
            }
            const response = await Api.UpdateVisi(visi.uuid, data)
            window.location.reload();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getContact()
        getData()
    }, [])
    

    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-white shadow-xl h-screen sticky top-0 overflow-hidden'>
                    <div className='flex items-center justify-center border-b py-3 gap-2'>
                        <img src={TamaCipta} width={50}/>
                        <h1 style={{ fontFamily: 'Montserrat', fontWeight: 700 }} className='hidden lg:block'>TRUEtalent</h1>
                    </div>
                    <div className='flex flex-col gap-5 p-5'>
                        <button className='flex items-center gap-5 justify-center lg:justify-start'>
                            <RxDashboard className='text-[#00989D]'/>
                            <h1 className='font-medium text-xs text-gray-500 hover:text-[#00989D] hidden lg:block'>Dashboard</h1>
                        </button>
                        <button className='flex items-center gap-5 justify-center lg:justify-start text-red-500 hover:text-[#00989D]' onClick={logout}>
                            <BiGroup/>
                            <h1 className='font-medium text-xs hidden lg:block'>Logout</h1>
                        </button>
                    </div>
                </div>
                <div className='col-span-10 h-screen p-5 space-y-5'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-4 w-full border h-36 lg:h-40 bg-white p-5 rounded-xl shadow-md flex flex-col gap-5 items-center justify-center'>
                            <h1 className='text-center font-bold text-xs lg:text-xl hidden lg:block'>Total of Your Contact List</h1>
                            <h1 className='text-center font-bold lg:hidden block'>Contact List</h1>
                            <h1 className='text-4xl lg:text-5xl text-[#00989D] font-bold text-center '>{!listContact.length ? '0' : listContact.length}</h1>
                        </div>
                        <div className='col-span-8 w-full border h-36 lg:h-40 bg-white p-5 rounded-xl shadow-md flex flex-col justify-center gap-5'>
                            <h1 className='text-gray-400 font-semibold text-xl line-clamp-1'>{!quotes ? '-' : quotes.nameQuotes}</h1>
                            <div className='flex items-center gap-5'>
                                <input value={quotesInput} onChange={ (value) => setQuotesInput(value.target.value) } className='w-full border rounded-full px-4 py-2 bg-gray-100 text-xs'/>
                                <button className='bg-[#00989D] px-4 py-2 rounded-full font-semibold text-white shrink-0 text-xs' onClick={updateQuotes}>Update Quotes</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-6 w-full border h-36 lg:h-40 bg-white p-5 rounded-xl shadow-md flex flex-col justify-center gap-5'>
                            <h1 className='text-gray-400 font-semibold text-sm line-clamp-1'>{!visi ? '-' : visi.nameVisi}</h1>
                            <div className='flex items-center gap-5'>
                                <input value={visiInput} onChange={ (value) => setVisiInput(value.target.value) } className='w-full border rounded-full px-4 py-2 bg-gray-100 text-xs'/>
                                <button className='bg-[#00989D] px-4 py-2 rounded-full font-semibold text-white shrink-0 text-xs' onClick={updateVisi}>Update Visi</button>
                            </div>
                        </div>
                        <div className='col-span-6 w-full border h-36 lg:h-40 bg-white p-5 rounded-xl shadow-md flex flex-col justify-center gap-5'>
                            <h1 className='text-gray-400 font-semibold text-sm line-clamp-1'>{!mission ? '-' : mission.nameMission}</h1>
                            <div className='flex items-center gap-5'>
                                <input value={missionInput} onChange={ (value) => setMissionInput(value.target.value) } className='w-full border rounded-full px-4 py-2 bg-gray-100 text-xs'/>
                                <button className='bg-[#00989D] px-4 py-2 rounded-full font-semibold text-white shrink-0 text-xs' onClick={updateMission}>Update Mission</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                        <table className='w-full text-sm text-left text-gray-500'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>
                                        Full Name
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Email Address
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Phone Number
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Company
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Country
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Message
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(listContact).map((data, index) => {
                                    return (
                                        <tr className='bg-white border-b' key={index}>
                                            <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2'>
                                                <div>
                                                    {!data.firstName ? ' ' : data.firstName}
                                                </div>
                                                <div>
                                                    {!data.lastName ? ' ' : data.lastName}
                                                </div>
                                            </td>
                                            <td className='px-6 py-4'>
                                                {!data.emailAddress ? ' ' : data.emailAddress }
                                            </td>
                                            <td className='px-6 py-4'>
                                                {!data.phoneNumber ? ' ' : data.phoneNumber}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {!data.company ? ' ' : data.company}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {!data.country ? ' ' : data.country}
                                            </td>
                                            <td className='px-6 py-4 truncate'>
                                                {!data.note ? ' ' : data.note}
                                            </td>
                                            <td className='px-6 py-4'>
                                                <a href={`https://api.whatsapp.com/send?phone=${data.phoneNumber}&text=Hello,%20apa%20kabar%20ada%20yang%20bisa%20saya%20bantu?`}>
                                                    <BsWhatsapp className='hover:text-green-400'/>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard