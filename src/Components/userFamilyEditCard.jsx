// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const UserFamilyEditCard = ({ name, photo, relation, age, occupation, education, marriageStatus, bloodGroup }) => {
    return (
        <>
            <div className='w-full h-full flex xs:flex-row flex-col items-start justify-start rounded-xl xs:gap-1 shadow-small overflow-hidden'>
                <div className='sm:w-40 xs:w-44 w-full sm:h-36 xs:h-[11.5rem] h-40'>
                    <img src={photo} alt="Profile Photo" className='sm:w-40 w-full h-full aspect-square object-cover xs:rounded-l-xl xs:rounded-t-none rounded-t-xl' />
                </div>
                <div className='flex flex-col w-full justify-center h-full gap-1 xs:pr-4 px-3.5 sm:py-4 xs:py-3 py-3.5 pt-1'>
                    <div className='flex items-center justify-between gap-2 w-full'>
                        <p className=' text-darkBlue font-bold xs:text-base text-sm xs:mt-0 mt-2 xs:mb-0 mb-1'>{name} ({relation})</p>
                        <div className='flex items-center justify-center gap-1.5'>
                            {/* Edit Btn */}
                            <button
                                onClick={() => {
                                    let deleteModal = document.getElementById('edit-modal')
                                    deleteModal.classList.remove('hidden')
                                    deleteModal.classList.add('flex')
                                }}
                                className='bg-secondary text-white p-1 rounded-md !outline-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-3 h-3' viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                            </button>
                            {/* delete btn */}
                            <button
                                onClick={() => {
                                    let deleteModal = document.getElementById('delete-modal')
                                    deleteModal.classList.remove('hidden')
                                    deleteModal.classList.add('flex')
                                }}
                                className='bg-red-500 text-white p-1 rounded-md !outline-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-3 h-3' viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
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
            {/* Delete Modal */}
            <div id="delete-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center w-screen md:inset-0 h-screen bg-[rgba(0,0,0,0.8)] max-h-full ">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            onClick={() => {
                                let deleteModal = document.getElementById('delete-modal')
                                deleteModal.classList.add('hidden')
                                deleteModal.classList.remove('flex')
                            }}
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button className="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Yes, I'm sure
                            </button>
                            <button
                                onClick={() => {
                                    let deleteModal = document.getElementById('delete-modal')
                                    deleteModal.classList.add('hidden')
                                    deleteModal.classList.remove('flex')
                                }}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit modal */}
            <div id="edit-modal" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-screen bg-[rgba(0,0,0,0.8)] max-h-full">
                <div className="relative p-4 w-full max-w-3xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-darkBlue rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-3 px-6 md:p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit Profile
                            </h3>
                            <button
                                onClick={() => {
                                    let deleteModal = document.getElementById('edit-modal')
                                    deleteModal.classList.add('hidden')
                                    deleteModal.classList.remove('flex')
                                }} type="button"
                                className="text-lightBlue bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <form className="p-4 md:p-5 !pt-3">
                            <div className="grid md:grid-cols-2 gap-4 mb-4 pt-4 overflow-y-scroll noScrollbar">
                                <div className='relative w-full px-1'>
                                    <label htmlFor="firstNameInput" className="block mb-2 text-sm font-medium text-white">First name</label>
                                    <input type="text" id="firstNameInput" name='firstNameInput' className="!outline-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-200 text-white" placeholder="John" required />
                                </div>
                                <div className='relative w-full px-1'>
                                    <label htmlFor="middleNameInput" className="block mb-2 text-sm font-medium text-white">Middle name</label>
                                    <input type="text" id="middleNameInput" name='middleNameInput' className="!outline-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-200 text-white" placeholder="John" required />
                                </div>
                                <div className='relative w-full px-1'>
                                    <label htmlFor="lastNameInput" className="block mb-2 text-sm font-medium text-white">Last name</label>
                                    <input type="text" id="lastNameInput" name='lastNameInput' className="!outline-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-200 text-white" placeholder="Doe" required />
                                </div>
                                <div className="relative w-full max-w-sm px-1">
                                    <label htmlFor="lastNameInput" className="block mb-2 text-sm font-medium text-white">Date of Birth</label>
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                </div>
                                <div className='relative w-full px-1'>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select id="countries" defaultValue={"Choose a country"} className="!outline-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-600 placeholder-gray-200 text-white">
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div className='relative w-full h-12 mb-2'>
                                    <select name="marriageStatusInput" id="marriageStatusInput" className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none'>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </select>
                                    {/* <input type="email" id='loginEmailInput' name='loginEmailInput' placeholder=' ' className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none' /> */}
                                    <label htmlFor="marriageStatusInput" className='absolute md:bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-0 -top-2.5 peer-focus:-top-2.5 transition-all duration-300'>Marriage Status</label>
                                </div>
                                <div className='relative w-full h-12 mb-2'>
                                    <select name="bloodInput" id="loginEmailInput" className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none'>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    {/* <input type="email" id='loginEmailInput' name='loginEmailInput' placeholder=' ' className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none' /> */}
                                    <label htmlFor="bloodInput" className='absolute md:bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-0 -top-2.5 peer-focus:-top-2.5 transition-all duration-300'>Blood Group</label>
                                </div>
                                <div className='relative w-full h-12 mb-2'>
                                    <select name="occupationInput" id="occupationInput" className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none'>
                                        <option value=""></option>
                                    </select>
                                    {/* <input type="email" id='loginEmailInput' name='loginEmailInput' placeholder=' ' className='bg-transparent w-full h-full border rounded-lg border-lightBlue text-lightBlue peer !outline-none' /> */}
                                    <label htmlFor="occupationInput" className='absolute md:bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-0 -top-2.5 peer-focus:-top-2.5 transition-all duration-300'>Occupation</label>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type="submit" className="!outline-none font-medium rounded-lg text-sm px-10 py-2 text-center bg-lightBlue text-darkBlue" >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserFamilyEditCard