// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserDetailsForm from '../Components/UserDetailsForm'

const SignupPage = () => {

    return (
        <div className='w-full h-full min-h-[500px] font-Inter flex sm:flex-row flex-col items-center justify-center relative'>
            <Link to="/" className='text-lg font-bold md:flex items-center justify-center gap-1 hidden absolute top-5 left-5 z-50 border p-2 px-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-200 hover:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                </svg>
                Home
            </Link>
            <div className='w-full h-full flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-center bg-darkBlue py-10 sm:px-6 px-8 z-20'>
                {/* Main Form Div */}
                <Link to="/" className='text-lg font-bold flex items-center justify-center gap-1 md:hidden border p-2 px-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-200 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                    </svg>
                    Home
                </Link>
                <UserDetailsForm />
            </div>
        </div>
    )
}

export default SignupPage