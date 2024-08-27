import { useState } from 'react'

const UserDetailsForm = () => {

    const [responseData, setresponseData] = useState([])
    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false)
    const [currSelectedGender, setCurrSelectedGender] = useState('')
    const [isMaritalDropdownOpen, setIsMaritalDropdownOpen] = useState(false)
    const [currSelectedMaritalStatus, setCurrSelectedMaritalStatus] = useState('')
    const [isOccupationDropdownOpen, setIsOccupationDropdownOpen] = useState(false)
    const [currSelectedOccupation, setCurrSelectedOccupation] = useState('')
    const [isBloodGrpDropdownOpen, setIsBloodGrpDropdownOpen] = useState(false)
    const [currSelectedBloodGrp, setCurrSelectedBloodGrp] = useState('')
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)
    const [currSelectedCity, setCurrSelectedCity] = useState('')
    const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false)
    const [currSelectedState, setCurrSelectedState] = useState('')

    const statesList = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
    const citiesList = ["Ahmedabad", "Bangalore", "Bharuch", "Bhavnagar", "Coimbatore City", "Gandhinagar", "Himmatnagar", "Hyderabad", "Jamnagar", "Junagadh City", "Keshod City", "Kodinar City", "Morbi", "Mumbai", "Porbandar City", "Pune", "Rajkot", "Surat", "Una", "Vadodara", "Vapi", "Veraval"]

    const handleSubmit = (e) => {
        e.preventDefault()
        let first_name = document.getElementById('signupFirstNameInput')
        let middle_name = document.getElementById('signupMiddleNameInput')
        let last_name = document.getElementById('signupLastNameInput')
        let email = document.getElementById('signupEmailInput')
        let password = document.getElementById('signupPasswordInput')
        let gender = document.getElementById('signupGenderInput')
        let dob = document.getElementById('signupDOBInput')
        let mobile = document.getElementById('signupMobileInput')
        let role = "user"
        let profile_img = document.getElementById('signupProfileInput')
        let native_place = document.getElementById('signupNativeInput')
        let marital_status = document.getElementById('signupMaritalStatusInput')
        let education = document.getElementById('signupEducationInput')
        let occupation = document.getElementById('signupOccupationInput')
        let blood_grp = document.getElementById('signupBloodGrpInput')
        let owner_id = null
        let flat_no_and_street = document.getElementById('signupFlatNoInput')
        let area = document.getElementById('signupAreaInput')
        let city = document.getElementById('signupCityInput')
        let state = document.getElementById('signupStateInput')
        let pincode = document.getElementById('signupPINInput')

        first_name.value = first_name.value.trim()
        middle_name.value = middle_name.value.trim()
        last_name.value = last_name.value.trim()
        email.value = email.value.trim()
        password.value = password.value.trim()
        gender.value = gender.value.trim()
        dob.value = dob.value.trim()
        mobile.value = mobile.value.trim()
        native_place.value = native_place.value.trim()
        marital_status.value = marital_status.value.trim()
        education.value = education.value.trim()
        occupation.value = occupation.value.trim()
        blood_grp.value = blood_grp.value.trim()
        flat_no_and_street.value = flat_no_and_street.value.trim()
        area.value = area.value.trim()
        city.value = city.value.trim()
        state.value = state.value.trim()
        pincode.value = pincode.value.trim()

        const userFormData = new FormData()

        userFormData.append("user[first_name]", first_name.value)
        userFormData.append("user[middle_name]", middle_name.value)
        userFormData.append("user[last_name]", last_name.value)
        userFormData.append("user[email]", email.value)
        userFormData.append("user[password]", password.value)
        userFormData.append("user[gender]", gender.value)
        userFormData.append("user[dob]", dob.value)
        userFormData.append("user[mobile]", mobile.value)
        userFormData.append("user[profile_img]", profile_img.value)
        userFormData.append("user[native_place]", native_place.value)
        userFormData.append("user[marital_status]", marital_status.value)
        userFormData.append("user[role]", role)
        userFormData.append("user[owner_id]", owner_id)
        userFormData.append("user[education]", education.value)
        userFormData.append("user[occupation]", occupation.value)
        userFormData.append("user[blood_grp]", blood_grp.value)

        const addressFormData = new FormData()

        addressFormData.append("address[flat_no_and_street]", flat_no_and_street.value)
        addressFormData.append("address[area]", area.value)
        addressFormData.append("address[city]", city.value)
        addressFormData.append("address[state]", state.value)
        addressFormData.append("address[pincode]", pincode.value)

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            body: userFormData,
        })
        .then(res => res.json())
        .then((data) => {
            // setresponseData(data)
            if(data.status == 201){
                addressFormData.append("address[user_id]", data.data.id)
                fetch("http://localhost:3000/api/v1/addresses", {
                    method: "POST",
                    body: addressFormData,
                })
                .then(res => res.json())
                .then(data2 => { 
                    console.log(data2);
                    setresponseData(data2)
                    first_name.value = ""
                    middle_name.value = ""
                    last_name.value = ""
                    email.value = ""
                    password.value = ""
                    gender.value = ""
                    dob.value = ""
                    mobile.value = ""
                    profile_img.value = ""
                    native_place.value = ""
                    marital_status.value = ""
                    education.value = ""
                    occupation.value = ""
                    blood_grp.value = ""
                    flat_no_and_street.value = ""
                    area.value = ""
                    city.value = ""
                    state.value = ""
                    pincode.value = ""

                    setCurrSelectedGender('')
                    setCurrSelectedMaritalStatus('')
                    setCurrSelectedOccupation('')
                    setCurrSelectedBloodGrp('')
                    setCurrSelectedCity('')
                    setCurrSelectedState('')
                })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} method="post" className='flex flex-col items-center gap-5 w-full sm:max-w-7xl max-w-md border-lightBlue rounded-lg xl:p-10 md:px-4 sm:px-10 px-2 select-none'>
            {responseData?.status == 401 && <div className={`bg-red-500 text-white text-center p-2 px-4 font-bold text-lg rounded-md`}>{responseData?.message}</div>}
            {/* Form Headings */}
            <div className='text-center mb-6'>
                <div className='flex items-center justify-center gap-2 mb-2'>
                    <img src="/images/logo.png" alt="Img" className='w-14 h-12' />
                    <h2 className='xs:text-4xl text-3xl text-lightBlue font-bold'>SVSG Login</h2>
                </div>
                <p className='text-lightBlue xs:text-base text-sm'>Explore profiles of every Vainsh Suthar members.</p>
            </div>
            {/* Form fields */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
                {/* First Name Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupFirstNameInput' name='signupFirstNameInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupFirstNameInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>First Name</label>
                </div>
                {/* Middle Name Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupMiddleNameInput' name='signupMiddleNameInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupMiddleNameInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Middle Name</label>
                </div>
                {/* Last Name Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupLastNameInput' name='signupLastNameInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupLastNameInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Last Name</label>
                </div>
                {/* Mobile Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupMobileInput' name='signupMobileInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupMobileInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Mobile</label>
                </div>
                {/* Email Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="email" id='signupEmailInput' name='signupEmailInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupEmailInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Email</label>
                </div>
                {/* Password Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="password" id='signupPasswordInput' name='signupPasswordInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required minLength={8} />
                    <label htmlFor="signupPasswordInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Password</label>
                </div>
                {/* Gender Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupGenderInput" name="signupGenderInput" type='text' placeholder=' ' value={currSelectedGender} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsGenderDropdownOpen(!isGenderDropdownOpen); }}
                        // onFocus={() => { setIsGenderDropdownOpen(!isGenderDropdownOpen); }}
                    />
                    <div id="gender-dropdown-menu" className={`w-full h-fit ${ isGenderDropdownOpen ? "" : "hidden" } absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {["Male", "Female"].map((gender, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                    onClick={() => {
                                        setCurrSelectedGender(gender);
                                        setIsGenderDropdownOpen(!isGenderDropdownOpen);
                                    }}
                                >
                                    {gender}
                                </span>
                            )
                        })}
                    </div>
                    <label htmlFor="signupGenderInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Gender</label>
                </div>
                {/* DOB Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="date" id='signupDOBInput' name='signupDOBInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required max={new Date().toISOString().split('T')[0]} />
                    <label htmlFor="signupDOBInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Date Of Birth</label>
                </div>
                {/* Profile Image Div */}
                <div className='relative w-full h-12 mb-2 lg:col-span-1 md:col-span-2'>
                    <input accept='image/*' type="file" id='signupProfileInput' name='signupProfileInput' placeholder=' ' className='bg-transparent pt-1 w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupProfileInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Profile Image</label>
                </div>
                {/* Native Place Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupNativeInput' name='signupNativeInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupNativeInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Native Place</label>
                </div>
                {/* Marital Status Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupMaritalStatusInput" name="signupMaritalStatusInput" type='text' placeholder=' ' value={currSelectedMaritalStatus} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsMaritalDropdownOpen(!isMaritalDropdownOpen) }}
                        // onFocus={() => { setIsMaritalDropdownOpen(!isMaritalDropdownOpen) }}
                    />
                    <div id="marital-dropdown-menu" className={`w-full h-fit max-h-[100px] overflow-y-scroll customScrollbar ${ isMaritalDropdownOpen ? '' : 'hidden'} absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {["Married", "Engaged", "Single", "Seperated", "Divorced", "Widowed"].map((status, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 active:bg-blue-100 cursor-pointer rounded"
                                    onClick={() => {
                                        setCurrSelectedMaritalStatus(status);
                                        setIsMaritalDropdownOpen(!isMaritalDropdownOpen);
                                    }}
                                >
                                    {status}
                                </span>
                            )
                        })}
                    </div>
                    {/* <input type="password" id='signupMaritalStatusInput' name='signupMaritalStatusInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required /> */}
                    <label htmlFor="signupMaritalStatusInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Marital Status</label>
                </div>
                {/* Education Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupEducationInput' name='signupEducationInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupEducationInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Education</label>
                </div>
                {/* Occupation Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupOccupationInput" name="signupOccupationInput" type='text' placeholder=' ' value={currSelectedOccupation} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsOccupationDropdownOpen(!isOccupationDropdownOpen) }}
                        // onFocus={() => { setIsOccupationDropdownOpen(!isOccupationDropdownOpen) }}
                    />
                    <div id="occupation-dropdown-menu" className={`w-full h-fit max-h-[100px] overflow-y-scroll customScrollbar ${ isOccupationDropdownOpen ? "" : "hidden"} absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {["Business", "Service/Job", "Housewife", "Retired", "Study", "Other"].map((occupation, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 active:bg-blue-100 cursor-pointer rounded"
                                    onClick={() => {
                                        setCurrSelectedOccupation(occupation);
                                        setIsOccupationDropdownOpen(!isOccupationDropdownOpen);
                                    }}
                                >
                                    {occupation}
                                </span>
                            )
                        })}
                    </div>
                    <label htmlFor="signupOccupationInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Occupation</label>
                </div>
                {/* Blood Group Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupBloodGrpInput" name="signupBloodGrpInput" type='text' placeholder=' ' value={currSelectedBloodGrp} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsBloodGrpDropdownOpen(!isBloodGrpDropdownOpen) }}
                        // onFocus={() => { setIsBloodGrpDropdownOpen(true) }}
                    />
                    <div id="blood-dropdown-menu" className={`w-full h-fit max-h-[100px] overflow-y-scroll customScrollbar ${ isBloodGrpDropdownOpen ? "" : "hidden"} absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((bloodGrp, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 active:bg-blue-100 cursor-pointer rounded"
                                    onClick={() => {
                                        setCurrSelectedBloodGrp(bloodGrp);
                                        setIsBloodGrpDropdownOpen(!isBloodGrpDropdownOpen);
                                    }}
                                >
                                    {bloodGrp}
                                </span>
                            )
                        })}
                    </div>
                    <label htmlFor="signupBloodGrpInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Blood Group</label>
                </div>

                {/* Flat No Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupFlatNoInput' name='signupFlatNoInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupFlatNoInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Flat No & Street Name</label>
                </div>
                {/* Area Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupAreaInput' name='signupAreaInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required />
                    <label htmlFor="signupAreaInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>Area Name</label>
                </div>
                {/* City Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupCityInput" name="signupCityInput" type='text' placeholder=' ' value={currSelectedCity} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsCityDropdownOpen(!isCityDropdownOpen) }}
                        // onFocus={() => { setIsBloodGrpDropdownOpen(true) }}
                    />
                    <div id="city-dropdown-menu" className={`w-full h-fit max-h-[100px] overflow-y-scroll customScrollbar ${ isCityDropdownOpen ? "" : "hidden"} absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {citiesList.map((city, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 active:bg-blue-100 cursor-pointer rounded"
                                    onClick={() => {
                                        setCurrSelectedCity(city);
                                        setIsCityDropdownOpen(!isCityDropdownOpen);
                                    }}
                                >
                                    {city}
                                </span>
                            )
                        })}
                    </div>
                    <label htmlFor="signupCityInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>City</label>
                </div>
                {/* State Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input id="signupStateInput" name="signupStateInput" type='text' placeholder=' ' value={currSelectedState} className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' readOnly
                        onClick={() => { setIsStateDropdownOpen(!isStateDropdownOpen) }}
                        // onFocus={() => { setIsBloodGrpDropdownOpen(true) }}
                    />
                    <div id="state-dropdown-menu" className={`w-full h-fit max-h-[100px] overflow-y-scroll customScrollbar ${ isStateDropdownOpen ? "" : "hidden"} absolute top-8 drop-shadow-2xl right-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40`} >
                        {statesList.map((state, i) => {
                            return (
                                <span key={i} className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 active:bg-blue-100 cursor-pointer rounded"
                                    onClick={() => {
                                        setCurrSelectedState(state);
                                        setIsStateDropdownOpen(!isStateDropdownOpen);
                                    }}
                                >
                                    {state}
                                </span>
                            )
                        })}
                    </div>
                    <label htmlFor="signupStateInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>State</label>
                </div>
                {/* PIN Div */}
                <div className='relative w-full h-12 mb-2'>
                    <input type="text" id='signupPINInput' name='signupPINInput' placeholder=' ' className='bg-transparent w-full h-full rounded-lg border !border-lightBlue text-lightBlue peer focus:!ring-0 !outline-none' required maxLength={6} minLength={6} />
                    <label htmlFor="signupPINInput" className='absolute bg-darkBlue text-lightBlue peer-placeholder-shown:text-base peer-focus:text-xs text-xs peer-placeholder-shown:top-3 left-3 -top-2 peer-focus:-top-2 px-1 peer-focus:px-1 transition-all duration-300'>PIN Code</label>
                </div>
            </div>
            
            {/* Login Button */}
            <button type="submit" className='mt-3 transition-all duration-300 bg-lightBlue px-8 py-2.5 rounded-lg text-lg'>SignUp</button>
        </form>
    )
}

export default UserDetailsForm