import React from "react";
import {NavLink} from "react-router-dom";
import aboutOne from "@/assets/about1.jpg"
import aboutTwo from "@/assets/about2.jpg"
import aboutThree from "@/assets/about3.jpg"

const About = () => {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={aboutOne}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={aboutTwo}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={aboutThree}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                          width={134}
                          height={106}
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                            cx="1.66667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3334"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="teal"
                        />
                        <circle
                            cx={31}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="teal"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx={103}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="teal"
                        />
                        <circle
                            cx={132}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="teal"
                        />
                      </svg>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why QuickHire Works
                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                                  Find the right people. Land the right job.
                                </h2>
                                <p className="mb-5 text-base text-body-color">
                                  QuickHire simplifies the hiring process for startups and small teams.
                                  Create a job post in minutes, find applicants fast, and manage applications from your dashboard.
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                  Jobseekers? No bloat — just clean listings and one-click apply.
                                </p>
                                <NavLink
                                    to="/auth/sign-up"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
