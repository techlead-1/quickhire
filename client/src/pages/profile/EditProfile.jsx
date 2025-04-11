import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from "@/components/Logo.jsx";
import {InputBox, SingleSelect} from "@/components/FormInputs.jsx";
import {useAuth} from "@/contexts/AuthContext.jsx";
import {useAlert} from "@/contexts/AlertContext.jsx";
import Avatar from "@/components/Avatar.jsx";
import {DefaultTextarea} from "@/components/FormInputs.jsx";
import axios from "@/libs/axios.js";

const EditProfile = () => {
    const { user, setUser } = useAuth()
    const { showAlert } = useAlert()
    const [data, setData] = useState(user);
    const [saving, setSaving] = useState(false);


    const submitForm = async () => {
        if (!user.name || user.name.length < 3) {
            showAlert('Name is required and must be more than 3 characters!', false);
            return;
        }

        setSaving(true);

        try {
            let response = await axios.put('/users/me', data)
            setData(response.data.data.user)
            setUser(response.data.data.user)
            showAlert('Successfully updated!', true);
        } catch (err) {
            let message = err?.response?.data?.error || 'Something went wrong';
            showAlert(message, false);
        } finally {
            setSaving(false);
        }
    }

    const uploadImage = async (imageFile) => {
        if (!imageFile) return

        setSaving(true);

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            showAlert('Uploading image, please wait...!', true);
            const response = await axios.post('/users/profile_image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const url = response.data.data.user.imageUrl;
            setData({...data, imageUrl: url});
            setUser({...user, imageUrl: url});
            showAlert('Profile image updated successfully!', true);
        } catch (err) {
            console.error(err);
            const message = err?.response?.data?.error || 'Image upload failed';
            showAlert(message, false);
        }
    }

    const uploadResume = async (resumeFile) => {
        if (!resumeFile) return

        setSaving(true);

        const formData = new FormData();
        formData.append('resume', resumeFile);

        try {
            showAlert('Uploading resume, please wait...!', true);
            let response = await axios.post('/users/resume', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            let url = response.data.data.user.resumeUrl;
            setData({...data, resumeUrl: url});
            setUser({...user, resumeUrl: url});
            showAlert('Resume updated successfully!', true);
        } catch (err) {
            let message = err?.response?.data?.error || 'Something went wrong';
            showAlert(message, false);
        } finally {
            setSaving(false);
        }
    }

    return (
        <section className="relative mx-auto max-w-[525px] lg:max-w-[700px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px] mt-10">
                <div className="mb-10 text-center md:mb-16">
                    <Avatar
                        src={user.imageUrl} alt={user.name}
                        name={user.role === 'job-seeker' ? user.name : user.companyName && user.companyName.length > 0 ? user.companyName : 'C'}
                        size="w-70 h-70" textSize="text-8xl"
                    />
                    <ProfileImageInput onChange={(value) => uploadImage(value)} role={user.role}/>
                </div>
                <form>
                    <label className='mb-[10px] block text-base font-medium text-left text-dark dark:text-white'>
                        Full Name
                    </label>
                    <InputBox
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        value={data.name}
                        handleInputChange={(value) => setData({...data, name: value})}
                    />

                    <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                        Email
                    </label>
                    <InputBox
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        handleInputChange={(value) => setData({...data, email: value})}
                        disabled={true}
                    />

                    {user.role === 'job-seeker' &&
                        <>
                            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                                Bio
                            </label>
                            <DefaultTextarea
                                placeholder="Bio"
                                value={data.bio}
                                handleInputChange={(value) => setData({...data, bio: value})}
                            />
                        </>
                    }

                    <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                        Location
                    </label>
                    <InputBox
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={data.location}
                        handleInputChange={(value) => setData({...data, location: value})}
                    />

                    {user.role === 'job-seeker' &&
                        <>
                            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                                Skills
                            </label>
                            <InputBox
                                type="text"
                                name="skills"
                                placeholder="Skills"
                                value={data.skills}
                                handleInputChange={(value) => setData({...data, skills: value})}
                            />
                        </>
                    }

                    {user.role === 'employer' &&
                        <>
                            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                                Company Name
                            </label>
                            <InputBox
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={data.companyName}
                                handleInputChange={(value) => setData({...data, companyName: value})}
                            />


                            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                                Company Description
                            </label>
                            <DefaultTextarea
                                placeholder="Company Description"
                                value={data.companyDescription}
                                handleInputChange={(value) => setData({...data, companyDescription: value})}
                            />

                            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                                Company Website
                            </label>
                            <InputBox
                                type="link"
                                name="company-website"
                                placeholder="Company Website"
                                value={data.companyWebsite}
                                handleInputChange={(value) => setData({...data, companyWebsite: value})}
                            />
                        </>
                    }

                    {user.role === 'job-seeker' &&
                        <>
                            <ResumeUploadInput onChange={(value) => uploadResume(value)} />
                            <a
                                href={data.resumeUrl ? data.resumeUrl : '#'}
                                target='_blank'
                                className='text-primary'
                            >
                                {data.resumeUrl ? 'Download Resume' : ''}</a>
                        </>
                    }


                    <div className="mb-10 mt-10">
                        <input
                            type="button"
                            value="Update"
                            className="w-full mt-5 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                            onClick={() => submitForm()}
                            disabled={saving}
                        />
                    </div>
                </form>
        </section>
    );
};

export default EditProfile;

const ProfileImageInput = ({ onChange, role }) => {
    const { showAlert } = useAlert();
    const maxSizeInBytes = 10 * 1024 * 1024;

    const handleChange = (e) => {
        const file = e.target.files[0];

        if (file && file.size > maxSizeInBytes) {
            showAlert('File too large! Max size is 10MB.', false);
            return;
        }

        if (file) {
            onChange(file);
        }
    };

    return (
        <div className="mt-4">
            <label
                htmlFor="profile-picture"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Upload {role === 'job-seeker' ? `Profile Picture` : 'Company Logo'}
            </label>
            <input
                type="file"
                id="profile-picture"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-primary file:text-white
                   hover:file:bg-primary/90"
            />
        </div>
    );
};

const ResumeUploadInput = ({ onChange }) => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onChange(file);
        }
    };

    return (
        <div className="mt-4">
            <label
                htmlFor="resume-upload"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Upload Resume (PDF)
            </label>
            <input
                type="file"
                id="resume-upload"
                accept="application/pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-primary file:text-white
                   hover:file:bg-primary/90"
            />
        </div>
    );
};