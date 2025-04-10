import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <section className="relative z-10 bg-primary py-[120px] h-screen">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                    <div className="mb-6">
                                        <svg
                                            className="mx-auto h-28 w-28 animate-bounce"
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" />
                                            <path
                                                d="M20 30h24M20 38h24"
                                                stroke="white"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                            <circle cx="24" cy="24" r="2" fill="white" />
                                            <circle cx="40" cy="24" r="2" fill="white" />
                                        </svg>
                                    </div>
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                                    Oops! That page can’t be found
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    The page you are looking for might have been deleted
                                </p>
                                <NavLink
                                    to='/'
                                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-center text-base font-medium text-primary hover:bg-blue-dark lg:px-7"
                                >
                                    Go To Home
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">*/}
                {/*    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>*/}
                {/*    <div className="flex h-full w-1/3">*/}
                {/*        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>*/}
                {/*        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>*/}
                {/*    </div>*/}
                {/*    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>*/}
                {/*</div>*/}
            </section>
        </>
    );
};

export default NotFound;