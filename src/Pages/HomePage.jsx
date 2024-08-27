// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { currCityAtom, currAreaAtom } from '../Variables'
import { useAtomValue, useAtom } from 'jotai'
import UserCardSmall from '../Components/userCardSmall'

const HomePage = () => {

    const currCity = useAtomValue(currCityAtom)
    const [currArea, setCurrArea] = useAtom(currAreaAtom)
    const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false)
    const [users, setUsers] = useState([])
    const [areas] = useState(['Chandlodia', 'Naranpura', 'Science City', 'Ognej', 'Vande Mataram', 'Ghatlodia', "Chanakyapuri", "Chandkheda", "Sanand", "Gota", "Ranip", "Satellite", "Bopal", "Vasna", "Bapunagar", "Maninagar", "Jivrajpark", "Anandnagar", "Thaltej", "Sarkhej", "Bhuyangdev", "Nikol", "Ramol", "Navrangpura", "Akhabarnagar", "Vastrapur"])

    useEffect(() => {
        let lastSelectedCity = localStorage.getItem('svsgCurrArea');
        setCurrArea(lastSelectedCity);
    }, [currArea, setCurrArea]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/users', { method: 'GET' })
        .then((res) => { return res.json() })
        .then((data) => {
            if (data.status === 200) {
                setUsers(data.data)
            } else {
                alert(data.message)
                window.location.href = '/'
            }
        })
        
    }, [])
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/addresses/get_city?city=${currCity}`, { method: 'GET' })
    }, [currCity])

    return (
        <div className='w-full h-full md:mt-20 mt-28 md:p-10 sm:p-8 p-6 font-Inter'>
            {/* Header Div */}
            <div className='flex md:flex-row flex-col md:items-start items-end justify-between gap-3 sm:mb-14 mb-8'>
                <h1 className='lg:text-6xl sm:text-5xl text-3xl font-bold text-slate-600 leading-snug w-full'>{currCity === null ? "Select a City" : "Currently viewing"} <span className='text-primary'>{currCity === null ? "" : `${currCity}`}</span></h1>
                {/* Area Dropdown Menu */}
                <div className="relative group !outline-none flex items-center justify-end gap-2 w-fit md:mt-2">
                    <button id="area-dropdown-button" className="inline-flex !outline-none justify-center w-full sm:px-4 px-3 py-2 font-medium text-gray-700 bg-transparent shadow-sm border border-gray-700 rounded-lg"
                        onClick={() => {
                            setIsAreaDropdownOpen(!isAreaDropdownOpen);
                            document.getElementById("area-dropdown-menu").classList.toggle("hidden", isAreaDropdownOpen);
                        }}
                    >
                        <span className="text-gray-700 sm:text-base text-sm whitespace-nowrap">{currArea === "" ? "Select Area" : currArea}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div id="area-dropdown-menu" className="md:w-[300px] min-w-[180px] customScrollbar w-full h-fit max-h-[250px] overflow-y-scroll overflow-x-hidden hidden absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40" >
                        {/* Search input */}
                        <input
                            id="search-input-area"
                            className="block rounded top-0 left-0 w-full px-2 py-1.5 text-sm text-gray-800 border-b border-gray-300 focus:outline-none"
                            type="text"
                            placeholder="Search Cities"
                            autoComplete="off"
                            onInput={() => {
                                let dropdownMenu = document.getElementById("area-dropdown-menu");
                                let searchInput = document.getElementById("search-input-area");
                                const searchTerm = searchInput.value.toLowerCase();
                                const items = dropdownMenu.querySelectorAll(".dropdownAreas");

                                items.forEach((item) => {
                                    const text = item.textContent.toLowerCase();
                                    if (text.includes(searchTerm)) {
                                        // document.getElementById("search-input-area")
                                        item.style.display = "block";
                                    } else {
                                        item.style.display = "none";
                                    }
                                });
                            }}
                        />
                        {/* Dropdown Areas */}
                        {areas.map((area, i) => {
                            return (
                                <span key={i} className="dropdownAreas block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                    onClick={() => {
                                        let dropdownMenu = document.getElementById("area-dropdown-menu");
                                        let searchInput = document.getElementById("search-input-area");

                                        setCurrArea(area);
                                        setIsAreaDropdownOpen(!isAreaDropdownOpen);
                                        dropdownMenu.classList.toggle("hidden", isAreaDropdownOpen);
                                        searchInput.value = null;
                                        
                                        localStorage.setItem("svsgCurrArea", area);
                                    }}
                                >
                                    {area}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className='w-full h-full'>
                <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 xl:gap-x-4 xl:gap-y-8 md:gap-8 md:gap-y-10 sm:gap-y-8 gap-6 gap-y-8'>
                    {users.map((user, i) => {
                        return (
                            <UserCardSmall key={i} userImg={'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710571641~exp=1710572241~hmac=0375135f2774551655bb08daa48ef9cc376f66d192a6cb97c24eb2395e06e457'} firstName={user['first_name']} lastName={user['last_name']} area={currArea} city={user.city} userId={user.id} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default HomePage