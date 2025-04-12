import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { BsChevronDown } from 'react-icons/bs';
import {useAuth} from "@/contexts/AuthContext.jsx";
import axios from '@/libs/axios.js'
import {useAlert} from "@/contexts/AlertContext.jsx";


const ApplicationsPage = () => {
    const [open, setOpen] = useState(false)
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const { user } = useAuth()
    const { showAlert } = useAlert()

    const fetchApplications = async () => {
        try {
            const response = await axios.get('/applications');
            setApplications(response.data.data.applications);
        } catch (error) {
            let message = error?.response?.data?.message || 'Something went wrong';
            showAlert(message, false);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApplications();
    }, [user])

    const deleteApplication = async (id) => {
        setLoading(true)

        try {
            await axios.delete(`/applications/${id}`)
            let data = applications.filter((item) => item._id !== id)
            setApplications(data)
            showAlert('Successfully deleted application.', true);
        } catch (error) {
            let message = error?.response?.data?.message || 'Something went wrong';
            showAlert(message, false);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mb-20 mt-20">
            <div className="flex items-center justify-between mb-20">
                <h1 className="text-[20px] italic">All ({applications.length}) applications</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {applications.map((app, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {app.jobId?.title || 'Untitled Job'}
                            </h2>
                            <span className="text-sm text-primary border border-primary rounded-full px-3 py-1">
                                {app.jobId?.isRemote ? 'Remote' : app.jobId?.location || 'N/A'}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {app.message || 'No application message.'}
                        </p>

                        {user.role === 'job-seeker' &&
                            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-4">
                              <span>
                                🧑{' '}
                                  <strong className="text-gray-700">
                                  {app.employerId?.companyName || app.employerId?.name || 'Unknown'}
                                </strong>
                              </span>
                                <span>
                                    💰{' '}
                                    <strong className="text-gray-700">{app.jobId?.salary || 'N/A'}</strong>
                                </span>
                            </div>
                        }

                        {user.role === 'employer' &&
                            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-4">
                              <span>
                                🧑{' '}
                                  <strong className="text-gray-700">
                                  {app.applicantId?.name || 'Unknown'}
                                </strong>
                              </span>
                                <span>
                                    💰{' '}
                                    <strong className="text-gray-700">{app.jobId?.salary || 'N/A'}</strong>
                                </span>
                            </div>
                        }

                        <div className="flex gap-3">
                            <button
                                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition"
                                onClick={() => navigate(`/applications/${app._id}`)}
                                disabled={loading}
                            >
                                View
                            </button>

                            {user.role === 'job-seeker' && (
                                <button
                                    className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition"
                                    onClick={() => deleteApplication(app._id)}
                                    disabled={loading}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationsPage;