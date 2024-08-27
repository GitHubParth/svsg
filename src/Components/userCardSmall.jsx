// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const UserCardSmall = ({ userImg, firstName, lastName, area, city, userId }) => {
    return (
        <Link to={'/user-details/' + userId} className='w-full flex flex-col items-center justify-center md:gap-3 xs:gap-1.5 gap-2 group/user cursor-pointer hover:scale-105 transition-all duration-300'>
            <div>
                <img src={userImg} alt={name} className='xl:w-48 md:w-44 sm:w-56 xs:w-40 w-64 xl:h-48 md:h-44 sm:h-56 xs:h-40 h-60 object-cover object-top transition-all duration-300 rounded-2xl drop-shadow-2xl' />
            </div>
            <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
                <h1 className='sm:text-lg xs:text-base text-xl truncate w-full font-semibold text-secondary text-center'>{firstName + " " + lastName}</h1>
                <p className='text-center sm:text-sm text-xs'>{area}, {city}</p>
            </div>
        </Link>
    )
}

export default UserCardSmall