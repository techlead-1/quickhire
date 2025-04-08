import React, { useState } from "react";
import Logo from "@/components/Logo.jsx"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center bg-white`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <NavLink to='/' className="block w-full py-5">
                            <Logo />
                        </NavLink>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${
                                    open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`lg:hidden absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-primary px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-50 transition-all duration-200 ${
                                    !open && "hidden"
                                } `}
                            >
                                <ul className="lg:hidden flex flex-col space-y-3 text-base font-medium text-white">
                                    <ListItem routeLink="/auth/sign-in">Sign in</ListItem>
                                    <ListItem routeLink="/auth/sign-up">Sign Up</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <NavLink
                                to="/auth/sign-in"
                                className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
                            >
                                Sign in
                            </NavLink>

                            <NavLink
                                to="/auth/sign-up"
                                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;

const ListItem = ({ children, routeLink }) => {
    return (
        <>
            <li>
                <NavLink
                    to={routeLink}
                    className="flex py-2 text-base font-medium hover:text-dark lg:ml-12 lg:inline-flex"
                >
                    {children}
                </NavLink>
            </li>
        </>
    );
};
