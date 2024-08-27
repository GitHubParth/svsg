// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const UserFamilyDetailsCard = ({ name, photo, relation, age, occupation, education, marriageStatus, bloodGroup }) => {
    return (
        <div className='w-full h-full flex xs:flex-row flex-col items-start justify-start rounded-xl xs:gap-4 shadow-small'>
            <div className='sm:w-40 xs:w-44 w-full sm:h-36   h-44'>
                <img src={photo} alt="Profile Photo" className='sm:w-40 w-full h-full aspect-square object-cover xs:rounded-l-xl xs:rounded-t-none rounded-t-xl' />
            </div>
            <div className='flex flex-col w-full justify-center h-full gap-1 xs:px-0 px-3 xs:py-3 py-4 pt-1'>
                <p className=' text-darkBlue font-bold xs:text-base text-sm xs:mt-0 mt-2 xs:mb-0 mb-1'>{name} ({relation})</p>
                <div className='grid grid-cols-2 xs:gap-1 gap-1.5 gap-x-4 w-full'>
                    <p className=' text-darkBlue sm:text-sm text-xs w-full flex sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Age</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {age}</p>
                     <p className='xs:flex hidden text-darkBlue sm:text-sm text-xs w-full sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Blood Group</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {bloodGroup}</p>
                     <p className='xs:hidden flex text-darkBlue sm:text-sm text-xs w-full sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Blood Grp</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {bloodGroup}</p>
                     <p className=' text-darkBlue sm:text-sm text-xs w-full flex sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Status</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {marriageStatus}</p>
                     <p className=' text-darkBlue sm:text-sm text-xs w-full flex sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Occupation</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {occupation}</p>
                     <p className=' text-darkBlue sm:text-sm text-xs w-full flex sm:flex-row flex-col sm:gap-1'>
                        <span className='font-semibold flex gap-1'>
                            <span>Education</span>
                            <span className='sm:block hidden'>:</span> 
                        </span>
                     {education}</p>
                </div>
            </div>
        </div>
    )
}

export default UserFamilyDetailsCard