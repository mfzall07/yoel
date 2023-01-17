import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import { BackQuotes, OfficeBuilding, PieChart, Profile, Profile2, Puzzle, Radar, Recruitment, Sean, Search, Tester } from '../../assets'
import { Footer, Navbar } from '../../components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [note, setNote] = useState('')
    const [quotes, setQuotes] = useState('')
    const [visi, setVisi] = useState('')
    const [mission, setMission] = useState('')

    const toastSuccess = () => {
        toast.success('Your message has been send!', {
            position: "top-center",
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
        toast.error('Failed to send your message!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
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

    const contact = async () => {
        try {
            const data = {
                firstName: firstName,
                lastName: lastName,
                company: company,
                country: country,
                emailAddress: email,
                phoneNumber: phoneNumber,
                note: note,
            }
            const response = await Api.CreateContact(data)
            toastSuccess()
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        } catch (error) {
            toastError()
            
        }
    }

    useEffect(() => {
        getData()
    }, [])
    


    return (
        <div id='home'>
            <Navbar/>
            {/* Section 1 */}
            <div style={{ backgroundImage: `url(${BackQuotes})` }} className='bg-cover h-[50vh] w-full lg:px-16 px-3 py-16 flex items-center'>
                <h1 className='font-bold w-[50vh] lg:w-[90vh] text-white text-xl lg:text-5xl capitalize'> “{quotes.nameQuotes}”</h1>
            </div> 

            <ToastContainer/>
            
            {/* Section 2 */}
            <div className='p-5 lg:p-16'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[#00989D] font-bold text-xl lg:text-2xl'>TRUEtalent</h1>
                        <p className='text-black'>is a head hunter / talent-seeking company providing manpower, consulting, people, and organization development.</p>
                    </div>
                    <img src={Sean} className='w-[500px] object-cover rounded-2xl shadow-xl'/>
                </div>
            </div>

            {/* Section 3 */}
            <div className='p-5 lg:p-16'>
                <h1 className='text-center font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Drive transformation through people.</h1>
                <div className='mt-5 lg:mt-16 flex flex-col lg:flex-row gap-10 lg:gap-52 items-center justify-center'>
                    <div className='flex flex-col items-center gap-5'>
                        <img src={Search} width={150}/>
                        <h1 className='text-center text-black font-semibold'>Deep Specialization</h1>
                    </div>  
                    <div className='flex flex-col items-center gap-5'>
                        <img src={Puzzle} width={150}/>
                        <h1 className='text-center text-black font-semibold'>Hybrid Search Solutions</h1>
                    </div>  
                    <div className='flex flex-col items-center gap-5'>
                        <img src={Recruitment} width={150}/>
                        <h1 className='text-center text-black font-semibold'>Recruiters Team</h1>
                    </div>  
                </div>
            </div>

            {/* Section 4 */}
            <div style={{ backgroundImage: `url(${Sean})` }} className='p-5 lg:p-16 bg-fixed h-[50vh] flex items-center justify-center' id='about'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-center font-bold text-white text-xl lg:text-2xl uppercase'>About Truetalent</h1>
                    <h1 className='text-center text-xs lg:text-sm text-white'>TrueTalent is an international head hunter company that focuses on specialization in any sector of the industry.</h1>
                </div>
            </div>
            
            {/* Section 5 */}
            <div className='p-5 lg:p-16'>
                <div className='flex flex-col gap-10 lg:gap-20'>
                    <h1 className='text-center font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Drive transformation through people</h1>
                    <div className='flex flex-col lg:flex-row item-center justify-between gap-20'>
                        <div className='flex gap-10'>
                            <img src={Radar} width={40} className='max-h-[40px]'/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Geographical</h1>
                                <h1 className='text-gray-400 text-xs lg:text-sm'>With our unlimited reach through our network and database, we can cover National and International region.</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <img src={PieChart} width={40} className='max-h-[40px]'/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Sector</h1>
                                <h1 className='text-gray-400 text-xs lg:text-sm'>Focus on specialization in the industry, ranging from renewable energy, telecommunication, technology based and automotive.</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <img src={OfficeBuilding} width={40} className='max-h-[40px]'/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Type of Company</h1>
                                <h1 className='text-gray-400 text-xs lg:text-sm'>Start ups, local conglomerates, local public owned, group holding and regional basedcompanies.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section 6 */}
            <div className='p-5 lg:p-16'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Vision & Mission</h1>
                    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20'>
                        <div className='flex flex-col gap-5 lg:w-1/2'>
                            <h1 className='text-[#00989D] text-xl font-bold text-center'>Vision</h1>
                            <p className='text-center text-xs lg:text-sm text-gray-400'>{visi.nameVisi}</p>
                        </div>
                        <div className='flex flex-col gap-5 lg:w-1/2'>
                            <h1 className='text-[#00989D] text-xl font-bold text-center'>Mission</h1>
                            <p className='text-center text-xs lg:text-sm text-gray-400'>{mission.nameMission}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section 7 */}
            <div className='p-5 lg:p-16'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-center font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>The Team</h1>
                    <div className='flex flex-col items-center lg:items-start gap-10 lg:gap-20'>
                        <div className='flex items-center gap-10 lg:gap-10'>
                            <h1 className='text-center font-bold text-black text-5xl uppercase'>1</h1>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Director - Business Development</h1>
                                <p className='text-xs lg:text-sm text-gray-400'>With over 20 years of working experience in Business Development and Human Capital area, covering various functions such as business development, Management, recruitment, operations, new business set up, and joint Venture operations.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-7 lg:gap-7'>
                            <h1 className='text-center font-bold text-black text-5xl uppercase'>2</h1>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Consultant 1 - Several Recruitment Firms</h1>
                                <p className='text-xs lg:text-sm text-gray-400'>Extensive 20 years of working experience in several recruitment firms, performing a full cycle of business development and successful placement of high caliber talents of different functions in directorship and senior manager levels. Building a track record as a trusted and reliable recruiter to satisfied clientele in various industries such as Manufacturing, Pharmaceutical, Logistics, Hospitality and Consumer Goods.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-7 lg:gap-7'>
                            <h1 className='text-center font-bold text-black text-5xl uppercase'>3</h1>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Director - Business Development</h1>
                                <p className='text-xs lg:text-sm text-gray-400'>A professional Recruiter with over 8 years experiences in recruitment industry. Has a records of placing General Managers to Directors as key placement position ranging from various industry from Manufacturing, Technology Solutions, Agriculture, Mining, Construction and has a strong networking in Property & Real Estate Development industry.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 lg:gap-6'>
                            <h1 className='text-center font-bold text-black text-5xl uppercase'>4</h1>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>Director - Business Development</h1>
                                <p className='text-xs lg:text-sm text-gray-400'>An experience Recruiter with more than 10 years of experience in Recruitment Firm. Specialized in handling Sales and Marketing positions from Manager to C levels especially in Consumer Goods and Technology industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section 7 */}
            <div className='p-5 lg:p-16 bg-[#00989D]' id='service'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                        <img src={Sean} className='w-[500px] object-cover rounded-2xl shadow-xl'/>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-white text-xl lg:text-2xl uppercase'>Strengths of our Services</h1>
                            <p className='text-white'>Our services provides talent acquisition from C-suites to all level positions from all industries and functions. We have tenured recruiters, supported by a reliable team that brings in-depth specialization, knowledge, cross-border market insight, and talent that other agencies and internal teams find difficult to match.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section 8 */}
            <div className='p-5 lg:p-16' id='client'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col item-center justify-between gap-5'>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start gap-10 bg-white border rounded-xl shadow-sm p-5'>
                            <img src={Search} width={150}/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Deep Specialization</h1>
                                <h1 className='text-gray-400'>We are a laser focused team of experienced recruiters who specialize across all industry sectors and job functions. We assemble a pool of candidates through research, referrals and networking built on personal relationships and trust.</h1>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start gap-10 bg-white border rounded-xl shadow-sm p-5'>
                            <img src={Puzzle} width={150}/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Hybrid Search Solutions</h1>
                                <h1 className='text-gray-400'>We have the rare ability to deliver contingent assignments successfully and we offer a low-risk fee structure.</h1>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start gap-10 bg-white border rounded-xl shadow-sm p-5'>
                            <img src={Recruitment} width={150}/>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[#00989D] text-xl lg:text-2xl font-bold'>Recruiters</h1>
                                <h1 className='text-gray-400'>Our individual recruiters have built exceptional candidate networks through referrals and engagement with decision makers, they are well-known in their local markets and around Asia.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 9 */}
            <div style={{ backgroundImage: `url(${BackQuotes})` }} className='p-5 lg:p-16 bg-fixed object-cover h-full lg:h-[50vh]'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-center font-bold text-white text-xl lg:text-2xl uppercase'>What we are capable of</h1>
                        <h1 className='text-center text-xs lg:text-sm text-white'>These are some of our portfolio to show our capability.</h1>
                    </div>
                    <div className='flex flex-col item-center justify-between gap-5'>
                        <h1 className='text-center font-bold text-white text-xl lg:text-2xl uppercase'>SUCCESSFUL PLACEMENTS</h1>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 mt-5'>
                            <div className='rounded-xl p-5 border border-white flex items-center gap-5 min-w-[350px] max-w-[350px] lg:min-w-[400px] lg:max-w-[400px]'>
                                <img src={Profile} className='border-2 shadow-sm rounded-full' width={70}/>
                                <ul className='list-disc text-white pl-7'>
                                    <li>Chief of Staff</li>
                                    <li>Brand Manager</li>
                                    <li>HR Operation Lead</li>
                                </ul>
                            </div>
                            <div className='rounded-xl p-5 border border-white flex items-center gap-5 min-w-[350px] max-w-[350px] lg:min-w-[400px] lg:max-w-[400px]'>
                                <img src={Profile2} className='border-2 shadow-sm rounded-full' width={75}/>
                                <ul className='list-disc text-white pl-7'>
                                    <li>Public Relation</li>
                                    <li>Manager Business</li>
                                    <li>Analyst Product Manager</li>
                                </ul>
                            </div>
                            <div className='rounded-xl p-5 border border-white flex items-center gap-5 min-w-[350px] max-w-[350px] lg:min-w-[400px] lg:max-w-[400px]'>
                                <img src={Tester} className='border-2 shadow-sm rounded-full' width={70}/>
                                <ul className='list-disc text-white pl-7'>
                                    <li>Digital Product Manager</li>
                                    <li>Legal Counsel</li>
                                    <li>Project Manager</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 10 */}
            <div className='p-5 lg:p-16' id='contact'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-center font-bold text-[#00989D] text-xl lg:text-2xl uppercase'>How Can We Help?</h1>
                        <h1 className='text-center text-xs lg:text-sm text-gray-400'>Thank you for your interest in TRUEtalent , Please feel free to speak with a representative by completing the form bellow. Our team will follow up with you shortly.</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='border rounded-xl p-16'>
                            <div className='grid md:grid-cols-2 md:gap-6'>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={firstName} onChange={ (value) => setFirstName(value.target.value) } type='text' name='floating_first_name' id='floating_first_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_first_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>First name</label>
                                </div>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={lastName} onChange={ (value) => setLastName(value.target.value) } type='text' name='floating_last_name' id='floating_last_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_last_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Last name</label>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 md:gap-6'>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={company} onChange={ (value) => setCompany(value.target.value) } type='text' name='floating_company' id='floating_company' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_company' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Company (Ex. Google)</label>
                                </div>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={country} onChange={ (value) => setCountry(value.target.value) } type='text' name='floating_country' id='floating_country' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_country' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Country</label>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 md:gap-6'>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={phoneNumber} onChange={ (value) => setPhoneNumber(value.target.value) } type='text' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name='floating_phone' id='floating_phone' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_phone' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Phone number</label>
                                </div>
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input value={email} onChange={ (value) => setEmail(value.target.value) } type='text' name='floating_email' id='floating_email' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                    <label htmlFor='floating_email' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email address</label>
                                </div>
                            </div>
                            <div className='relative z-0 w-full mb-6 group'>
                                <input value={note} onChange={ (value) => setNote(value.target.value) } type='text' name='floating_note' id='floating_note' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00989D] peer' placeholder=' ' required />
                                <label htmlFor='floating_note' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00989D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>How Can We Help You? *</label>
                            </div>
                            <div className='flex items-center justify-center lg:justify-end mt-10'>
                                <button className='bg-[#00989D] hover:bg-[#00985E] p-3 rounded-lg shadow-sm text-sm text-white font-semibold' onClick={contact}>Confirmation</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.5204297163782!2d106.7776384!3d-6.2529634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11a320b2779%3A0x85f08c33ba7e7417!2sPT%20Tama%20Cipta%20Group!5e0!3m2!1sid!2sid!4v1672762257969!5m2!1sid!2sid'
                            className='rounded-xl h-[450px]'
                        />
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default Home