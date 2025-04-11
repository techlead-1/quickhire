import React, {useEffect, useState} from 'react';
import {useAuth} from "@/contexts/AuthContext.jsx";
import {useAlert} from "@/contexts/AlertContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import axios from "@/libs/axios.js"

const ShowJobs = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth()
    const { showAlert } = useAlert()
    const { id } = useParams()
    const navigate = useNavigate();

    const fetchJob = async () => {
        try {
            let response = await axios.get(`/jobs/${id}`)
            setJob(response.data.data.job)
        } catch (error) {
            let message = error?.response?.data?.error || 'Something went wrong';
            showAlert(message)
            navigate('/jobs')
        }
    }

    useEffect(() => {
        fetchJob();
    }, [id])

    if (!job) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="mb-20 mt-20">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 mb-6 text-sm text-primary hover:underline"
                >
                    <BsArrowLeft /> Back
                </button>

                <div className="flex items-center gap-4 mb-3">
                    {job.createdBy.imageUrl ? (
                        <img
                            src={job.createdBy.imageUrl}
                            alt="Company Logo"
                            className="w-16 h-16 rounded-full object-cover border"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
                            {job.createdBy.companyName
                                ? job.createdBy.companyName.slice(0, 2).toUpperCase()
                                : job.createdBy.name.slice(0, 2).toUpperCase()}
                        </div>
                    )}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {job.createdBy.companyName || job.createdBy.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {job.createdBy.companyWebsite || 'N/A'}
                        </p>
                    </div>
                </div>

                {/* Job Info */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{job.title}</h1>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-md">
          <strong>Salary:</strong> {job.salary || "Not specified"}
        </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md">
          <strong>Location:</strong> {job.isRemote ? "Remote" : job.location}
        </span>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <h2 className="text-lg font-medium mb-2">Job Description</h2>
                    <p>{job.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowJobs;