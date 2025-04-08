import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import Logo from '@/components/Logo.jsx'
import {InputBox, SingleSelect} from "@/components/FormInputs.jsx";
import {useAlert} from "@/contexts/AlertContext.jsx";
import axios from "@/libs/axios.js";
import {useNavigate}from "react-router-dom";


const SignUp = () => {
    const { showAlert } = useAlert();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'job-seeker'
    });
    const [saving, setSaving] = useState(false);
    const [options, setOptions] = useState([
        {id: 'employer', name: 'Employer'},
        {id: 'job-seeker', name: 'Job Seeker'},
    ])

    const isValidated = () => {
        if (!user.name || user.name.trim().length <= 3) {
            showAlert('Full name is required and must be more than 3 characters', false);
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!user.email || user.email.length <= 3) {
            showAlert('Email is required and must be more than 3 characters', false);
            return false;
        }

        if (!emailRegex.test(user.email)) {
            showAlert('Email is not valid', false);
            return false;
        }

        if (!user.password || user.password.length <= 6) {
            showAlert('Password is required and must be more than 6 characters', false);
            return false;
        }

        if (!user.role || user.role.length <= 3) {
            showAlert('Role is required', false);
            return false;
        }

        return true;
    }

    const submitForm = async () => {
        setSaving(true);

        if (!isValidated()) {
            setSaving(false);
            return
        }

        try {
            let response = await axios.post('/auth/sign-up', user);

            showAlert('Account created successfully.', true);
            setSaving(false);
            navigate('/jobs');
        } catch (error) {
            let message = error?.response?.data?.message || 'Something went wrong';
            showAlert(message, false);
            setSaving(false);
            console.error(error);
        }

    }

    return (
        <section className="bg-primary h-screen py-20 lg:py-[120px]">
            <div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <NavLink
                                    to="/"
                                    className="mx-auto inline-block max-w-[160px]"
                                >
                                    <Logo />
                                </NavLink>
                            </div>
                            <form>
                                <InputBox
                                    type='text'
                                    name='name'
                                    placeholder='Full Name'
                                    value={user.name}
                                    handleInputChange={(value) => setUser({...user, name: value})}
                                />
                                <InputBox
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={user.email}
                                    handleInputChange={(value) => setUser({...user, email: value})}
                                />
                                <SingleSelect value={user.role} handleSelectChange={(value) => setUser(value)} options={options} />
                                <InputBox
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={user.password}
                                    handleInputChange={(value) => setUser({...user, password: value})}
                                />
                                <div className="mb-10 mt-10">
                                    <input
                                        type="button"
                                        value="Sign Up"
                                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                        onClick={() => submitForm()}
                                        disabled={saving}
                                    />
                                </div>
                            </form>
                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5">Already a member? </span>
                                <NavLink
                                    to="/auth/sign-in"
                                    className="text-primary hover:underline"
                                    disabled={saving}
                                >
                                    Sign In
                                </NavLink>
                            </p>

                            <div>
                <span className="absolute right-1 top-1">
                  <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                        cx="1.39737"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 1.39737 38.6026)"
                        fill="teal"
                    />
                    <circle
                        cx="1.39737"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 1.39737 1.99122)"
                        fill="teal"
                    />
                    <circle
                        cx="13.6943"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 13.6943 38.6026)"
                        fill="teal"
                    />
                    <circle
                        cx="13.6943"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 13.6943 1.99122)"
                        fill="teal"
                    />
                    <circle
                        cx="25.9911"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 25.9911 38.6026)"
                        fill="teal"
                    />
                    <circle
                        cx="25.9911"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 25.9911 1.99122)"
                        fill="teal"
                    />
                    <circle
                        cx="38.288"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 38.288 38.6026)"
                        fill="teal"
                    />
                    <circle
                        cx="38.288"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 38.288 1.99122)"
                        fill="teal"
                    />
                    <circle
                        cx="1.39737"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 1.39737 26.3057)"
                        fill="teal"
                    />
                    <circle
                        cx="13.6943"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 13.6943 26.3057)"
                        fill="teal"
                    />
                    <circle
                        cx="25.9911"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 25.9911 26.3057)"
                        fill="teal"
                    />
                    <circle
                        cx="38.288"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 38.288 26.3057)"
                        fill="teal"
                    />
                    <circle
                        cx="1.39737"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 1.39737 14.0086)"
                        fill="teal"
                    />
                    <circle
                        cx="13.6943"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 13.6943 14.0086)"
                        fill="teal"
                    />
                    <circle
                        cx="25.9911"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 25.9911 14.0086)"
                        fill="teal"
                    />
                    <circle
                        cx="38.288"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 38.288 14.0086)"
                        fill="teal"
                    />
                  </svg>
                </span>
                                <span className="absolute bottom-1 left-1">
                  <svg
                      width="29"
                      height="40"
                      viewBox="0 0 29 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                        cx="2.288"
                        cy="25.9912"
                        r="1.39737"
                        transform="rotate(-90 2.288 25.9912)"
                        fill="teal"
                    />
                    <circle
                        cx="14.5849"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 14.5849 25.9911)"
                        fill="teal"
                    />
                    <circle
                        cx="26.7216"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 26.7216 25.9911)"
                        fill="teal"
                    />
                    <circle
                        cx="2.288"
                        cy="13.6944"
                        r="1.39737"
                        transform="rotate(-90 2.288 13.6944)"
                        fill="teal"
                    />
                    <circle
                        cx="14.5849"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 14.5849 13.6943)"
                        fill="teal"
                    />
                    <circle
                        cx="26.7216"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 26.7216 13.6943)"
                        fill="teal"
                    />
                    <circle
                        cx="2.288"
                        cy="38.0087"
                        r="1.39737"
                        transform="rotate(-90 2.288 38.0087)"
                        fill="teal"
                    />
                    <circle
                        cx="2.288"
                        cy="1.39739"
                        r="1.39737"
                        transform="rotate(-90 2.288 1.39739)"
                        fill="teal"
                    />
                    <circle
                        cx="14.5849"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 14.5849 38.0089)"
                        fill="teal"
                    />
                    <circle
                        cx="26.7216"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 26.7216 38.0089)"
                        fill="teal"
                    />
                    <circle
                        cx="14.5849"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 14.5849 1.39761)"
                        fill="teal"
                    />
                    <circle
                        cx="26.7216"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 26.7216 1.39761)"
                        fill="teal"
                    />
                  </svg>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;

