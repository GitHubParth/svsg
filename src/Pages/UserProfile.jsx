// eslint-disable-next-line no-unused-vars
import React, { createElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserFamilyEditCard from '../Components/userFamilyEditCard'

const UserProfile = () => {

    // const [isProfileImageSet, setIsProfileImageSet] = useState(false)
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('svsgUserId')}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setUserData(data.data)
                    console.log(data.data);
                }
            })
    }, [])

    const handleProfileImageChange = () => {
        let profileImg = document.getElementById('profileImageInput');
        const formData = new FormData()

        formData.append('profile_img', profileImg.files[0])
        let userId = localStorage.getItem('svsgUserId')

        fetch(`http://localhost:3000/api/v1/users/change_profile_image?id=${userId}`, {
            method: 'PATCH',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    console.log(data.data);
                }
            }
        )
    }

    const userFamily = [
        {
            name: 'Madhavji Padhiar',
            relation: 'Father',
            photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457',
            dob: '07-20-1948',
            bloodGroup: 'A+',
            occupation: 'Retired',
            education: '10th Pass',
            marriageStatus: 'Married'
        },
        {
            name: 'Hansaben Padhiar',
            relation: 'Mother',
            photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457',
            dob: '07-20-1948',
            bloodGroup: 'A-',
            occupation: 'Housewife',
            education: '10th Pass',
            marriageStatus: 'Married'
        },
        {
            name: 'Jyotshna Padhiar',
            relation: 'Wife',
            photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457',
            dob: '12-23-1979',
            bloodGroup: 'O+',
            occupation: 'Housewife',
            education: '10th Pass',
            marriageStatus: 'Married'
        },
        {
            name: 'Parth Padhiar',
            relation: 'Son',
            photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457',
            dob: '11-30-2002',
            bloodGroup: 'O+',
            occupation: 'Student',
            education: 'BECE',
            marriageStatus: 'Single'
        },
        {
            name: 'Tanvi Padhiar',
            relation: 'Daughter',
            photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457',
            dob: '06-07-2006',
            bloodGroup: 'O+',
            occupation: 'Student',
            education: '12th Pass',
            marriageStatus: 'Single'
        },
    ]

    return (
        <div className='w-full h-full md:mt-20 mt-28 md:p-10 sm:p-8 p-6 font-Inter'>
            {/* User Profile */}
            <div className='flex flex-col items-center justify-center gap-3 mb-10'>
                {/* Heading Div */}
                <div className='w-full flex sm:flex-row flex-col items-end sm:items-center justify-between gap-4 mb-6'>
                    <h2 className='xs:text-5xl text-3xl font-bold text-slate-600 sm:w-fit w-full'>User Details</h2>
                    <Link to='' className='sm:w-fit xs:text-base text-sm hover:shadow-2xl transition-all duration-300 flex items-center gap-2 w-fit bg-darkBlue text-lightBlue px-4 py-2 rounded-lg'>
                        <svg className='w-4 h-4 text-lightBlue' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        Edit Profile
                    </Link>
                </div>
                <div className='w-full h-full flex sm:flex-row flex-col items-center sm:items-start justify-center lg:gap-5 gap-7'>
                    {/* User Profile Picture Div */}
                    <div className='relative xl:w-1/4 md:w-1/3 flex flex-col items-center justify-center gap-4'>
                        <img src={userData?.profile_img} alt="Profile Photo" className='w-72 h-72 object-cover object-center lg:rounded-full rounded-2xl' />
                        <button onClick={() => { let div = document.getElementById('changeProfileImageDiv'); div.classList.remove('scale-0') }} className='cursor-pointer hover:shadow-2xl px-4 py-2 rounded-lg bg-darkBlue text-lightBlue transition-all duration-300 h-full flex items-center justify-center gap-2'>
                            <svg className='w-4 h-4 text-lightBlue transition-all duration-300' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C20.9472 19.2703 20.998 17.147 20.9999 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Edit Image
                        </button>
                    </div>
                    {/* User Details Div */}
                    <div className='xl:w-3/4 md:w-2/3 flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-5xl text-3xl font-bold text-secondary mb-2'>{userData?.first_name + " " + userData?.middle_name +  " " + userData?.last_name}</h1>
                            <p className='lg:text-base text-sm'>
                                <span>Naranpura, </span>
                                <span>Ahmedabad</span>
                            </p>
                        </div>
                        {/* User Details */}
                        <div className='grid md:grid-cols-2 sm:gap-3 gap-4 lg:text-base text-sm'>
                            {/* Address */}
                            <p className='max-w-[800px] text-darkBlue flex flex-col sm:gap-0 gap-1 col-span-2'>
                                <span className='font-semibold flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="lg:w-4 w-2.5 h-4">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    Address</span>
                                <span className='font-light'>54/509 Greenpark Apartment, Sola Road, Naranpura, Near A.E.C Bridge, Ahmedabad - 380013</span>
                            </p>
                            {/* Mobile */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1 lg:col-span-1 col-span-2'>
                                <span className='font-semibold flex items-center lg:gap-2 gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="lg:w-3.5 w-3 h-3.5" >
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                    Mobile</span>
                                <span className='flex items-start gap-2'>
                                    <a href={'tel:'} className='font-light'>+91 9099333060</a>
                                    <a href={'tel:'} className='font-light'>+91 9638527410</a>
                                </span>
                            </p>
                            {/* Email */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-4 w-3 h-4' fill='currentColor' viewBox="0 0 512 512">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                    Email</span>
                                <span className='font-light'>abc@xyz.com</span>
                            </p>
                            {/* Gaam */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='currentColor' className="lg:w-4 w-3 h-4">
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                    </svg>
                                    Mud Gaam</span>
                                <span className='font-light'>Balagam</span>
                            </p>
                            {/* Occupation */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='currentColor' className="lg:w-4 w-3 h-4">
                                        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                                    </svg>
                                    Occupation</span>
                                <span className='font-light'>Business</span>
                            </p>
                            {/* Age */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1'>
                                    <svg viewBox="0 0 192 192" preserveAspectRatio="xMidYMid meet" className="lg:w-3.5 w-2 lg:h-3.5">
                                        <g transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                            <path d="M810 1880 c-207 -44 -343 -116 -483 -255 -188 -187 -277 -400 -277 -664 0 -260 91 -481 274 -666 255 -258 642 -343 982 -215 161 60 317 172 412 297 60 79 152 255 152 290 0 11 -11 30 -24 42 -40 37 -63 21 -108 -76 -97 -210 -240 -351 -439 -433 -247 -102 -484 -87 -734 47 -119 64 -250 206 -319 347 -216 435 -13 959 439 1134 90 35 220 62 300 62 132 0 325 -57 445 -132 92 -57 240 -205 240 -239 0 -5 -49 -6 -109 -2 -132 7 -161 -4 -161 -62 0 -50 21 -55 226 -55 231 0 214 -18 214 229 0 182 -1 190 -21 205 -23 16 -43 12 -71 -12 -15 -12 -18 -32 -18 -101 l0 -86 -47 54 c-26 30 -84 81 -127 114 -131 97 -241 146 -399 177 -120 24 -234 24 -347 0z" />
                                            <path d="M566 1178 c-8 -18 -37 -87 -66 -153 -28 -66 -58 -133 -66 -149 -21 -43 -18 -46 30 -46 42 0 44 1 61 45 l17 46 76 -3 77 -3 21 -40 c19 -37 24 -40 67 -43 l48 -3 -15 33 c-8 18 -30 69 -49 113 -19 44 -51 115 -70 158 l-36 77 -40 0 c-36 0 -42 -4 -55 -32z m84 -144 c11 -25 20 -48 20 -50 0 -2 -20 -4 -45 -4 -33 0 -45 4 -45 15 0 20 32 85 42 85 5 0 18 -21 28 -46z" />
                                            <path d="M897 1087 c-61 -57 -63 -154 -5 -214 43 -45 88 -52 146 -24 l44 22 -6 -27 c-11 -42 -34 -55 -91 -51 -27 3 -59 7 -70 11 -15 5 -23 0 -32 -20 -16 -34 -13 -39 44 -58 60 -21 88 -20 140 4 73 33 83 60 83 238 l0 152 -39 0 c-22 0 -41 -5 -44 -12 -3 -10 -9 -10 -26 0 -11 6 -41 12 -65 12 -37 0 -51 -6 -79 -33z m148 -52 c29 -29 33 -79 8 -107 -22 -24 -91 -25 -109 0 -7 9 -14 34 -14 54 0 28 6 41 26 57 35 27 59 26 89 -4z" />
                                            <path d="M1294 1110 c-11 -4 -33 -22 -47 -40 -23 -27 -27 -41 -27 -99 0 -65 1 -68 40 -106 38 -37 43 -39 102 -39 44 0 71 6 91 19 l28 18 -23 24 c-23 22 -26 23 -54 9 -31 -17 -58 -13 -86 12 -40 34 -23 42 87 42 l105 0 0 30 c0 47 -34 105 -74 124 -36 17 -107 20 -142 6z m120 -72 c22 -30 12 -38 -49 -38 -62 0 -74 11 -45 40 27 27 75 26 94 -2z" />
                                        </g>
                                    </svg>
                                    Age</span>
                                <span className='font-light'>47</span>
                            </p>
                            {/* Education */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor' className="lg:w-4 w-2.5 h-4">
                                        <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                                    </svg>
                                    Education</span>
                                <span className='font-light'>HSC</span>
                            </p>
                            {/* Blood Group */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="lg:w-3.5 w-2 lg:h-3.5">
                                        <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                                    </svg>
                                    Blood Group</span>
                                <span className='font-light'>O+</span>
                            </p>
                            {/* Marriage Status */}
                            <p className='text-darkBlue flex flex-col sm:gap-0 gap-1'>
                                <span className='font-semibold flex xs:items-center items-start gap-1'>
                                    <svg viewBox="0 0 192 192" preserveAspectRatio="xMidYMid meet" className="lg:w-5 xs:w-3 w-4 h-4 xs:mt-0 mt-0.5">
                                        <g transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                            <path d="M427 1789 c-50 -26 -89 -87 -95 -148 -9 -93 49 -173 146 -202 80 -23 183 29 214 110 15 40 12 124 -5 156 -20 39 -65 81 -100 94 -44 17 -118 12 -160 -10z" />
                                            <path d="M1312 1789 c-62 -31 -95 -92 -94 -172 2 -108 75 -180 184 -181 186 -2 257 245 100 345 -58 36 -126 39 -190 8z" />
                                            <path d="M331 1391 c-69 -18 -115 -80 -227 -307 -57 -117 -104 -222 -104 -233 0 -56 89 -92 128 -53 10 10 56 90 101 178 46 87 87 163 92 169 5 5 9 -190 9 -487 l0 -495 25 -27 c27 -29 77 -35 107 -12 33 25 38 65 38 317 0 242 1 249 20 249 19 0 20 -7 20 -265 l0 -266 25 -24 c33 -34 83 -34 116 1 l24 26 2 496 c2 273 3 499 3 502 0 3 14 -22 31 -55 166 -320 169 -325 224 -325 40 0 63 31 154 207 47 89 86 161 87 160 1 -1 -26 -143 -60 -314 l-62 -312 65 -3 66 -3 2 -178 c1 -171 2 -180 24 -203 31 -33 82 -32 114 1 25 24 25 26 25 205 0 173 1 180 20 180 19 0 20 -7 20 -164 0 -167 7 -209 38 -232 30 -23 80 -17 107 12 25 26 25 30 25 205 l0 179 66 0 67 0 -6 28 c-27 121 -80 376 -87 417 -4 28 -14 71 -20 96 -25 100 -2 74 83 -90 49 -94 97 -176 107 -181 48 -26 120 11 120 60 0 12 -47 117 -104 233 -89 181 -112 220 -154 259 -45 42 -55 47 -116 53 -110 12 -326 2 -362 -18 -51 -26 -92 -82 -157 -213 -34 -68 -64 -124 -67 -124 -3 0 -29 48 -58 108 -71 143 -108 196 -157 224 -37 21 -53 23 -210 25 -93 1 -185 -2 -204 -6z" />
                                        </g>
                                    </svg>
                                    Marriage Status</span>
                                <span className='font-light'>Married</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upload Image Div */}
            <div id='changeProfileImageDiv' className='scale-0 transition-all duration-300 fixed z-30 top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.8)] md:pt-0 pt-28'>
                <div className='w-[80%] max-w-2xl h-fit p-6 rounded-lg bg-white flex flex-col items-center justify-center gap-4'>
                    <img id='profileImagePreview' src="" alt="" className={'!w-40 !h-40 object-cover rounded-lg hidden'} />
                    <input
                        onChange={() => {
                            let file = document.getElementById('profileImageInput');
                            let previewImg = document.getElementById('profileImagePreview');

                            previewImg.src = window.URL.createObjectURL(file.files[0])
                            previewImg.alt = "Profile Image"
                            previewImg.classList.remove('hidden')
                        }}
                        type="file"
                        id='profileImageInput'
                        accept='image/*'
                        className='border-2 border-dashed file:rounded-md pl-6 border-darkBlue border-spacing-10 p-2 rounded-lg w-full'
                    />
                    <button onClick={() => { handleProfileImageChange() }} className='cursor-pointer hover:shadow-2xl px-4 py-2 rounded-lg bg-darkBlue text-lightBlue transition-all duration-300 h-full flex items-center justify-center gap-2'>
                        <svg className='w-4 h-4 text-lightBlue transition-all duration-300' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C20.9472 19.2703 20.998 17.147 20.9999 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Upload
                    </button>
                </div>
                {/* Close Button */}
                <button
                    className='absolute md:top-24 top-32 right-8'
                    onClick={() => {
                        let div = document.getElementById('changeProfileImageDiv');
                        div.classList.add('scale-0');
                        let previewImg = document.getElementById('profileImagePreview');
                        previewImg.src = ""
                        previewImg.classList.add('hidden')
                    }}>
                    <svg className="w-8 h-8 text-lightBlue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* User Family Details Div */}
            <div className='flex flex-col items-center justify-center '>
                <div className='w-full flex sm:flex-row flex-col items-end sm:items-center justify-between gap-4 mb-6'>
                    <h2 className='xs:text-5xl text-3xl font-bold text-slate-600 sm:w-fit w-full'>Family Details</h2>
                </div>
                {/* User Family Details */}
                <div className='w-full h-full flex sm:flex-row flex-col items-center sm:items-start justify-center lg:gap-5 gap-7'>
                    <div className='w-full h-full lg:grid lg:grid-cols-2 flex flex-col items-start justify-start gap-6'>
                        {userFamily.map((member, i) => {
                            // Calculate Age from DOB
                            let dob = new Date(member.dob);
                            var month_diff = Date.now() - dob.getTime();
                            var age_dt = new Date(month_diff);
                            var year = age_dt.getUTCFullYear();
                            var memberAge = Math.abs(year - 1970);
                            return (
                                <UserFamilyEditCard key={i} name={member.name} photo={member.photo} relation={member.relation} age={memberAge} marriageStatus={member.marriageStatus} occupation={member.occupation} education={member.education} bloodGroup={member.bloodGroup} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile