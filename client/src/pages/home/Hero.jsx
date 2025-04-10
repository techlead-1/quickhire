import React from 'react';
import {NavLink} from "react-router-dom";
import heroImage from "@/assets/hero.png";

const Hero = () => {
    return (
        <div>
            <div className="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Kickstart Hiring or Job Hunting with QuickHire
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color">
                                    QuickHire helps startups and professionals connect faster —
                                    whether you’re hiring talent or finding your next role.
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <NavLink
                                            to="/auth/sign-up"
                                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                        >
                                            Get Started
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="clients pt-16">
                                    <h6 className="mb-6 flex items-center text-xs font-normal text-body-color">
                                        Some Of Our Clients
                                        <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                                    </h6>

                                    <div className="flex items-center space-x-4">
                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src={heroImage}
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="teal" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="teal" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="teal" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="teal" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="teal" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="teal" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="teal" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="teal" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="teal" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="teal" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="teal" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="teal" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="teal" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="teal" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="teal" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="teal" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="teal" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="teal" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="teal" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="teal" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="teal" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="teal" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="teal" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="teal" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="teal" />
                    </svg>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};