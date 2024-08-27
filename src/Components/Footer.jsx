// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-darkBlue h-auto md:pt-8 pt-6 font-Inter">
            <div className="flex items-center justify-center xs:gap-0 gap-2 md:flex-col md:px-10 xs:px-6 px-4">
                <img src="/images/logo.png" alt="Logo" className="md:w-32 w-24 md:h-28 h-20 mb-3" />
                {/* <h1 className='text-4xl text-lightBlue font-bold mb-2'>SVSG</h1> */}
                <div className="flex flex-col items-center md:gap-3 gap-2">
                    <p className="text-lightBlue font-semibold sm:text-lg xs:text-base text-sm w-full md:text-center">|| જય માતાજી ||</p>
                    <p className="text-lightBlue font-semibold sm:text-lg xs:text-base text-sm w-full md:text-center">|| જય વિશ્વકર્મા દાદા ||</p>
                </div>
            </div>
            <p className="text-center w-full py-3 bg-secondary text-lightBlue md:mt-8 mt-4">&copy; All Copyrights Reserved, 2024</p>
        </footer>
    );
};

export default Footer;
