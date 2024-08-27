// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const [rememberMe, setRememberMe] = useState(false)
    const [responseDate, setResponseDate] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let email = document.getElementById('loginEmailInput')
        let password = document.getElementById('loginPasswordInput')
        let rememberMe = document.getElementById('loginRememberInput')

        if (password.value.length < 8) {
            return
        }

        email.value = email.value.trim()
        password.value = password.value.trim()

        const formData = new FormData()

        formData.append("session[email]", email.value)
        formData.append("session[password]", password.value)
        formData.append("session[remember_me]", rememberMe.value)

        email.value = ""
        password.value = ""
        rememberMe.checked = false

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => { 
                if (data.status === 200) {
                    localStorage.setItem("svsgUserId", data.user_id)
                    window.location.href = "/"
                } else {
                    setResponseDate(data)
                }
            })
    }

    return (
        <div className='w-screen h-screen min-h-[500px] font-Inter flex sm:flex-row flex-col items-center justify-center relative'>
            <Link to="/" className='text-lg font-bold md:flex items-center justify-center gap-1 hidden absolute top-5 left-5 z-50 border p-2 px-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-200 hover:text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                </svg>
                Home
            </Link>
            <div className='flex items-center justify-center w-full h-full relative'>
                {/* Welcome Div */}
                <div className='lg:w-[65%] md:w-1/2 w-full h-full md:relative absolute top-0 left-0'>
                    {/* Background Image */}
                    <img src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp" className='w-full h-full object-cover object-center' alt="img" />
                    {/* Overlay Div */}
                    <div className='absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)]' />
                    {/* Welcome Message Div */}
                    <div className='absolute w-full h-full top-0 left-0 flex-col items-center justify-center p-5 md:flex hidden'>
                        <div className='flex items-center justify-center gap-2 lg:mb-2 sm:mb-4 mb-2 w-full'>
                            <img src="/images/logo.png" alt="Img" className='w-20 h-16' />
                            <h2 className='text-[5vw] text-lightBlue font-bold text-center leading-tight w-fit'>Welcome to SVSG</h2>
                        </div>
                        <p className='text-lightBlue text-[2vw] font-light text-center'>Login to SVSG to explore profiles of Vainsh Suthar members.</p>
                    </div>
                </div>
                {/* Main Form Div */}
                <div className='lg:w-[35%] md:w-1/2 w-full min-h-[500px] h-full flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-center bg-darkBlue sm:px-6 px-8 z-20'>
                    <Link to="/" className='text-lg font-bold flex items-center justify-center gap-1 md:hidden border p-2 px-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-200 hover:text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                        </svg>
                        Home
                    </Link>
                    <form onSubmit={handleSubmit} method="post" className='flex flex-col items-center gap-5 w-full md:max-w-none sm:max-w-lg max-w-md border-lightBlue rounded-lg xl:p-10 md:px-4 sm:px-10 px-2 select-none'>
                        {responseDate?.status == 401 && <div className={`bg-red-500 text-white text-center p-2 px-4 font-bold text-lg rounded-md`}>{responseDate?.message}</div>}
                        {/* Form Headings */}
                        <div className='text-center mb-6'>
                            <div className='flex items-center justify-center gap-2 mb-2'>
                                <img src="/images/logo.png" alt="Img" className='w-14 h-12' />
                                <h2 className='xs:text-4xl text-3xl text-lightBlue font-bold'>SVSG Login</h2>
                            </div>
                            <p className='text-lightBlue xs:text-base text-sm'>Explore profiles of every Vainsh Suthar members.</p>
                        </div>
                        {/* Email Div */}
                        <div className='relative w-full h-12 mb-2'>
                            <input type="email" id='loginEmailInput' name='loginEmailInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                            <label htmlFor="loginEmailInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Email</label>
                        </div>
                        {/* Password Div */}
                        <div className='relative w-full h-12 mb-2'>
                            <input type="password" id='loginPasswordInput' name='loginPasswordInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required minLength={8} />
                            <label htmlFor="loginPasswordInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Password</label>
                        </div>
                        {/* Error Message for Password length less than 8 */}
                        <p id="loginPasswordError" className={`bg-red-200 text-red-600 rounded p-2 py-1.5 w-full text-sm hidden -mt-6 items-center justify-start gap-2`}></p>
                        {/* Remember Me Div */}
                        <div className='w-full flex xs:flex-row flex-col items-center justify-between gap-2'>
                            <div className='relative flex items-center gap-2 w-fit'>
                                <input type="checkbox" value={rememberMe} id='loginRememberInput' name='loginRememberInput' placeholder=' ' className='bg-transparent h-full rounded-lg text-lightBlue peer hidden' />
                                <div className={'w-3.5 h-3.5 bg-transparent border rounded text-white '} onClick={() => { setRememberMe(!rememberMe) }}>
                                    <svg fill="currentColor" className={rememberMe ? ' opacity-100' : ' opacity-0' + " transition-all duration-300"} viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                    </svg>
                                </div>
                                <label onClick={() => { setRememberMe(!rememberMe) }} htmlFor="loginRememberInput" className='text-lightBlue text-sm select-none'>Remember Me ?</label>
                            </div>
                            <Link to='forgot-password' className='text-lightBlue text-sm'>Forgot Password ??</Link>
                        </div>
                        {/* Login Button */}
                        <button type="submit" className='mt-3 transition-all duration-300 bg-lightBlue px-8 py-2.5 rounded-lg text-lg'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage