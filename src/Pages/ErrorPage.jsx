// eslint-disable-next-line no-unused-vars
import React from 'react'

const ErrorPage = () => {
    return (
        <section className="relative z-10 bg-darkBlue h-screen w-screen flex items-center justify-center font-Inter">
            <div className="container mx-auto">
                <div className="-mx-4 flex">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[400px] text-center">
                            <h2 className="mb-2 text-3xl font-bold leading-none text-white sm:text-[7rem] md:text-[10rem]">404</h2>
                            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white"> Oops! That page can’t be found </h4>
                            <p className="mb-8 text-lg text-white"> The page you are looking for does not exist. Please return to Home page</p>
                            <a href="/" className="inline-block rounded-lg border border-white px-8 py-3 text-center text-xl font-semibold text-white transition hover:bg-white hover:text-darkBlue">
                                Go To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                <div className="flex h-full w-1/3">
                    <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
                <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
        </section>
    )
}

export default ErrorPage