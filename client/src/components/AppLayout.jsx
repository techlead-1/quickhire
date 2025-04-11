import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Logo from "@/components/Logo.jsx";
import Container from "@/components/Container.jsx";
import {useAlert} from "@/contexts/AlertContext.jsx";
import { useAuth} from "@/contexts/AuthContext.jsx";
import axios from '@/libs/axios.js'

const AppLayout = ({children}) => {
    const [open, setOpen] = useState(false);
    const { showAlert } = useAlert();
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            await axios.delete('/auth/sign-out')
            showAlert('Signed out successfully', true)
            setUser(null)
            navigate('/auth/sign-in');
        } catch (err) {
            let message = err?.response?.data?.error || 'Something went wrong';
            showAlert(message, false);
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <header className={`bg-gray-50 shadow-sm h-16 flex items-center px-4 md:px-6 justify-between`}>
                <div className="w-full">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4">
                            <NavLink to='/jobs' className="block w-full py-5">
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
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden md:hidden`}
                                >
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                                </button>
                                <nav
                                    // :className="!navbarOpen && 'hidden' "
                                    id="navbarCollapse"
                                    className={`lg:hidden absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-gray-50 px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none z-50 transition-all duration-200 ${
                                        !open && "hidden"
                                    } `}
                                >
                                    <ul className="lg:hidden flex flex-col space-y-3 text-base font-medium">
                                        <ListItem routeLink="/jobs" setOpen={(value) => setOpen(value)}>Jobs</ListItem>
                                        <ListItem routeLink="/applications" setOpen={(value) => setOpen(value)}>Applications</ListItem>
                                        <ListItem routeLink="/profile" setOpen={(value) => setOpen(value)}>Profile</ListItem>
                                        <ListItem routeLink="#" danger={true} logoutUser={logoutUser}>Logout</ListItem>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                                <NavLink
                                    to="/jobs"
                                    className={({ isActive }) =>
                                        `px-7 py-3 text-base font-medium hover:text-primary ${
                                            isActive ? 'text-primary border-b-2 border-primary' : 'text-dark'
                                        }`
                                    }
                                >
                                    Jobs
                                </NavLink>

                                <NavLink
                                    to="/applications"
                                    className={({ isActive }) =>
                                        `px-7 py-3 text-base font-medium hover:text-primary ${
                                            isActive ? 'text-primary border-b-2 border-primary' : 'text-dark'
                                        }`
                                    }
                                >
                                    Applications
                                </NavLink>

                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        `px-7 py-3 text-base font-medium hover:text-primary ${
                                            isActive ? 'text-primary border-b-2 border-primary' : 'text-dark'
                                        }`
                                    }
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className={`px-7 py-3 text-base text-danger font-medium hover:text-danger`}
                                    disabled
                                    onClick={logoutUser}
                                >
                                    Logout
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-grow">
                <Container>
                    {children}
                </Container>
            </div>

            <footer className="w-full border-t bg-gray-50 shadow-sm h-16 py-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} QuickHire. All rights reserved.
            </footer>
        </div>
    );
};

export default AppLayout;

const ListItem = ({ children, routeLink, danger = false, logoutUser = null, setOpen }) => {
    return (
        <>
            <li className='border-b border-gray-200 last:border-b-0'>
                {danger &&
                    <NavLink
                        to={routeLink}
                        className="flex py-2 font-medium hover:text-dark lg:ml-12 lg:inline-flex text-danger"
                        onClick={logoutUser}
                    >
                        {children}
                    </NavLink>
                }

                {!danger &&
                    <NavLink
                        to={routeLink}
                        className={
                        ({ isActive }) =>
                            `flex py-2 font-medium hover:text-dark lg:ml-12 lg:inline-flex 
                            ${isActive ? 'text-primary' : `text-base`}`
                        }
                        onClick={() => setOpen(false)}
                    >
                        {children}
                    </NavLink>
                }
            </li>
        </>
    );
};
