import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "@/contexts/AuthContext.jsx";
import axios from "@/libs/axios.js"
import {useAlert} from "@/contexts/AlertContext.jsx";
import { BsChevronDown } from 'react-icons/bs';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth()
    const { showAlert } = useAlert();
    const dropdownRef = useRef();

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/jobs')
            setJobs(response.data.data.jobs);
        } catch (err) {
            const message = err?.response?.data?.error || 'Something went wrong';
            showAlert(message, false);
        }
    }


    useEffect(() => {
        fetchJobs();
    }, [])

    const deleteJob = async (jobId) => {
        try {
            await axios.delete(`/jobs/${jobId}`)
            let data = jobs.filter((job) => job._id !== jobId)
            setJobs(data)
            showAlert('Deleted job successfully', true);
        } catch (err) {
            const message = err?.response?.data?.error || 'Something went wrong';
            showAlert(message, false);
        }
    }

    console.log(user)

    return (
        <div className="mb-20 mt-20">
            <div className="flex items-center justify-between mb-20">
                <h1 className="text-[20px] italic" >All ({jobs.length}) jobs</h1>
                {user && user.role === 'employer' &&
                    <input
                        type="button"
                        value='Create Job'
                        className="w-[200px] cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                        onClick={() => navigate('/jobs/create')}
                    />
                }
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                            {job.isRemote && (
                                <span className="text-sm text-primary border border-primary rounded-full px-3 py-1">
                                    Remote
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job.description}</p>
                        <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                            <span>
                              📍 <strong className="text-gray-700">{job.location}</strong>
                            </span>
                            <span>
                              💰 <strong className="text-gray-700">{job.salary}</strong>
                            </span>
                        </div>

                        <div className="flex gap-3 mt-4">
                            {user.role === 'job-seeker' &&
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition"
                                    onClick={() => navigate(`/jobs/${job._id}`)}
                                >
                                    View
                                </button>
                            }

                            {user.role === 'employer' &&
                                <div className="relative inline-flex rounded-md shadow-sm" ref={dropdownRef}>
                                    {/* Main View Button */}
                                    <button
                                        onClick={() => navigate(`/jobs/${job._id}`)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-l-md hover:bg-primary/90 transition"
                                    >
                                        View
                                    </button>

                                    {/* Dropdown Toggle */}
                                    <button
                                        onClick={() => {
                                            if (!open || open !== job._id) {
                                                setOpen(job._id)
                                                return;
                                            } else {
                                                setOpen(false)
                                            }
                                        }}
                                        className="px-2 py-2 text-sm text-white bg-primary rounded-r-md hover:bg-primary/90 transition"
                                    >
                                        <BsChevronDown size={16} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {open && open === job._id && (
                                        <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded-md shadow-md z-50 text-sm">
                                            <button
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                                onClick={() => navigate(`/jobs/edit/${job._id}`)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
                                                onClick={() => deleteJob(job._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobsPage;
