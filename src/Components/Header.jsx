// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAtom } from 'jotai'
import { currCityAtom } from '../Variables'

const Header = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [currCity, setCurrCity] = useAtom(currCityAtom)

    useEffect(() => {
        let userId = localStorage.getItem('svsgUserId');
        if (userId) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [])

    useEffect(() => {
        let lastSelectedCity = localStorage.getItem('svsgCurrCity');
        setCurrCity(lastSelectedCity);
    }, [currCity, setCurrCity]);

    const cities = ["Ahmedabad", "Bangalore", "Bharuch", "Bhavnagar", "Coimbatore", "Gandhinagar", "Himatnagar", "Hydrabad", "Jamnagar City", "Jamnagar Gramya", "Junagadh City", "Junagadh Gramya", "Keshod", "Kodinar City", "Kodinar Gramya", "Morbi", "Mumbai", "Porbandar City", "Porbandar Gramya", "Pune", "Rajkot", "Surat", "Una", "Vadodara", "Vapi", "Veraval"];

    return (
        <header className="z-50 fixed top-0 w-full md:h-20 h-28 bg-darkBlue flex md:flex-row flex-col items-center justify-end md:justify-between md:gap-0 gap-1 md:px-10 px-4 font-Inter">
            
            {/* Logo Div */}
            <div className="flex items-center justify-between gap-2 md:w-auto w-full">
                <div className="flex items-center justify-center sm:gap-1">
                    <img
                        // eslint-disable-next-line no-undef
                        src={"/images/logo.png"}
                        alt="Logo"
                        className="w-14 h-12"
                    />
                    <h1 className="text-4xl md:text-3xl font-semibold text-lightBlue ">
                        SVSG
                    </h1>
                </div>
                <div className="flex items-center justify-center gap-3">
                    {/* Profile Picture */}
                    {isLogin ? (
                        <>
                            <div
                                className="md:hidden block"
                                onClick={() => {
                                    let profileMenu =
                                        document.getElementById("profileMenu");
                                    profileMenu.classList.toggle("!h-auto");
                                }}
                            >
                                <img
                                    src="./images/logo.jpg"
                                    alt="ProfilePic"
                                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                                />
                            </div>
                            {/* Profile Menu */}
                            <ul
                                id="profileMenu"
                                className="absolute top-[4.5rem] right-5 w-28 h-0 overflow-hidden flex flex-col items-center justify-center shadow-xl bg-lightBlue backdrop-blur-lg rounded-md"
                            >
                                <li className="p-2 px-0 w-full text-center border-b border-black cursor-pointer">
                                    <a href="/profile">Settings</a>
                                </li>
                                <li
                                    className="p-2 px-0 w-full text-center cursor-pointer"
                                    onClick={() => {
                                        localStorage.removeItem('svsgUserId')
                                        window.location.reload()
                                    }}
                                >
                                    Logout
                                </li>
                            </ul>
                        </>
                    ) : (
                        ""
                    )}
                    {/* Menu Btn */}
                    <button
                        onClick={() => {
                            setIsHeaderOpen(true);
                        }}
                        className="md:hidden block"
                    >
                        <svg
                            fill="currentColor"
                            className="w-7 h-7 text-lightBlue"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Cities Dropdown Mobile */}
            <div className="relative group !outline-none md:hidden flex items-center justify-end gap-2 w-full mb-2">
                {/* <p className="w-auto text-primary text-sm">Current City : </p> */}
                <button id="dropdown-button-mobile" className="inline-flex !outline-none justify-center w-fit lg:px-4 py-2 text-sm font-medium text-gray-700 bg-transparent shadow-sm"
                    onClick={() => {
                        setIsCityDropdownOpen(!isCityDropdownOpen);
                        document.getElementById("dropdown-menu-mobile").classList.toggle("hidden", isCityDropdownOpen);
                    }}
                    // onBlur={() => {
                    //     setIsCityDropdownOpen(!false);
                    //     document.getElementById("dropdown-menu-mobile").classList.add("hidden");
                    // }}
                >
                    <span className="text-lightBlue">{currCity === "" ? "Select City" : currCity}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 text-lightBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div id="dropdown-menu-mobile" className="w-full h-fit max-h-[310px] overflow-y-scroll overflow-x-hidden hidden absolute top-8 drop-shadow-2xl right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 space-y-1" >
                    {/* Search input */}
                    <input
                        id="search-input-mobile"
                        className="relative rounded top-0 left-0 w-full px-2 py-1.5 text-sm text-gray-800 border-b border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Search Cities"
                        autoComplete="off"
                        onInput={() => {
                            let dropdownMenu = document.getElementById("dropdown-menu-mobile");
                            let searchInput = document.getElementById("search-input-mobile");
                            const searchTerm = searchInput.value.toLowerCase();
                            const items = dropdownMenu.querySelectorAll("span");

                            items.forEach((item) => {
                                const text = item.textContent.toLowerCase();
                                if (text.includes(searchTerm)) {
                                    document.getElementById("search-input-mobile")
                                    item.style.display = "block";
                                } else {
                                    item.style.display = "none";
                                }
                            });
                        }}
                    />
                    {/* Dropdown Cities */}
                    {cities.map((city, i) => {
                        return (
                            <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                onClick={() => {
                                    let dropdownMenu = document.getElementById("dropdown-menu-mobile");
                                    let searchInput = document.getElementById("search-input-mobile");
                                    const items = dropdownMenu.querySelectorAll("span");

                                    setCurrCity(city);
                                    setIsCityDropdownOpen(!isCityDropdownOpen);
                                    dropdownMenu.classList.toggle("hidden", isCityDropdownOpen);
                                    searchInput.value = null;

                                    items.forEach((item) => {
                                        item.style.display = "block";
                                    });

                                    // Save curr city in local Storage for next time use so that user don't have to select city everytime he/she opens website
                                    localStorage.setItem('svsgCurrCity', city);
                                }}
                            >
                                {city}
                            </span>
                        )
                    })}
                </div>
            </div>

            {/* Laptop - Tablet Menu */}
            <div className="md:flex hidden">
                {/* Menu */}
                <ul className="flex lg:gap-7 gap-5 items-center justify-center w-full font-OpenSans relative">

                    {/* Cities Dropdown */}
                    <div className="relative group !outline-none">
                        <button id="dropdown-button" className="inline-flex !outline-none justify-center w-full lg:px-4 py-2 text-sm font-medium text-gray-700 bg-transparent shadow-sm"
                            onClick={() => {
                                setIsCityDropdownOpen(!isCityDropdownOpen);
                                document.getElementById("dropdown-menu").classList.toggle("hidden", isCityDropdownOpen);
                            }}
                            // onBlur={() => {
                            //     setIsCityDropdownOpen(false);
                            //     document.getElementById("dropdown-menu").classList.add("hidden");
                            // }}
                        >
                            <span className="text-lightBlue">{currCity === "" ? "Select City" : currCity}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 text-lightBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div id="dropdown-menu" className="w-[160px] h-fit max-h-[310px] overflow-y-scroll overflow-x-hidden customScrollbar hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1" >
                            {/* Search input */}
                            <input
                                id="search-input"
                                className="block rounded top-0 left-0 w-full px-2  py-1.5 text-sm text-gray-800 border-b border-gray-300 focus:outline-none"
                                type="text"
                                placeholder="Search Cities"
                                autoComplete="off"
                                onInput={() => {
                                    let dropdownMenu = document.getElementById("dropdown-menu");
                                    let searchInput = document.getElementById("search-input");
                                    const searchTerm = searchInput.value.toLowerCase();
                                    const items = dropdownMenu.querySelectorAll("span");

                                    items.forEach((item) => {
                                        const text = item.textContent.toLowerCase();
                                        if (text.includes(searchTerm)) {
                                            document.getElementById("search-input")
                                            item.style.display = "block";
                                        } else {
                                            item.style.display = "none";
                                        }
                                    });
                                }}
                            />
                            {/* Dropdown Cities */}
                            {cities.map((city, i) => {
                                return (
                                    <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                        onClick={() => {
                                            let dropdownMenu = document.getElementById("dropdown-menu");
                                            let searchInput = document.getElementById("search-input");
                                            const items = dropdownMenu.querySelectorAll("span");

                                            setCurrCity(city);
                                            setIsCityDropdownOpen(!isCityDropdownOpen);
                                            dropdownMenu.classList.toggle("hidden", isCityDropdownOpen);
                                            searchInput.value = null;

                                            items.forEach((item) => {
                                                item.style.display = "block";
                                            });

                                            // Save curr city in local Storage for next time use so that user don't have to select city everytime he/she opens website
                                            localStorage.setItem('svsgCurrCity', city);
                                        }}
                                    >
                                        {city}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    {/* Header Links */}
                    <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                        <Link to="/events">Events</Link>
                    </li>
                    <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                        <Link to="/statistics">Statistics</Link>
                    </li>

                    {/* Profile Picture */}
                    {isLogin ? (
                        <>
                            <img
                                src="./images/logo.jpg"
                                alt="ProfilePic"
                                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                                onClick={() => {
                                    let profileMenu =
                                    document.getElementById("profileMenu");
                                    profileMenu.classList.toggle("!h-auto");
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="text-lightBlue lg:text-lg cursor-pointer !outline-none">
                                <a href="/sign-up">Signup</a>
                            </li>
                        </>
                    )}

                    
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden flex absolute top-0 right-0 bg-darkBlue h-screen transition-all duration-300 overflow-hidden ${isHeaderOpen ? "w-screen" : "w-0"}`} >
                {/* Close Btn */}
                <button
                    onClick={() => {
                        setIsHeaderOpen(false);
                    }}
                    className="absolute top-7 right-5"
                >
                    <svg
                        fill="currentColor"
                        className="w-6 h-6 text-lightBlue"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
                {/* Menu */}
                <ul className="flex flex-col gap-5 items-center justify-center w-full">
                    <li className="text-lightBlue text-2xl">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-lightBlue text-2xl">
                        <a href="/events">Events</a>
                    </li>
                    <li className="text-lightBlue text-2xl">
                        <a href="/about">About</a>
                    </li>
                    <li className="text-lightBlue text-2xl">
                        <a href="/statistics">Statistics</a>
                    </li>
                    <li className="text-lightBlue text-2xl">
                        <a href="/login">Login</a>
                    </li>
                    <li className="text-lightBlue text-2xl">
                        <a href="/sign-up">SignUp</a>
                    </li>
                </ul>
            </div>

        </header>
    );
};

export default Header;
