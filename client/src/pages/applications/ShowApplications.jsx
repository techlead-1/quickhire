import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "@/libs/axios.js"
import {useAlert} from "@/contexts/AlertContext.jsx";
import Skeleton from "@/components/Skeleton.jsx";

const ShowApplications = () => {
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applicant, setApplicant] = useState(null);
    const [job, setJob] = useState(null);
    const { id } = useParams();
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    const fetchApplication = async () => {
        try {
            const response = await axios.get(`/applications/${id}`);
            setApplication(response.data.data.application);
            setApplicant(response.data.data.application.applicantId);
            setJob(response.data.data.application.jobId);
        } catch (error) {
            let message = error?.response?.data?.error || 'Something went wrong';
            showAlert(message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {fetchApplication()}, [id]);

    if (loading) {
        return (
            <Skeleton />
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 mb-20 bg-white rounded-lg shadow p-6">
            {/* Back */}
            <button
                onClick={() => navigate(-1)}
                className="text-primary text-sm mb-6 hover:underline"
            >
                ← Back
            </button>

            {/* Applicant Info */}
            <div className="flex items-center gap-6 border-b pb-6">
                <img
                    src={applicant.imageUrl || "https://via.placeholder.com/80"}
                    alt={applicant.name}
                    className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{applicant.name}</h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {applicant.bio || "No description provided."}
                    </p>
                </div>
            </div>

            {/* Job Info */}
            <div className="mt-6 border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Applied to:</h3>
                <div className="text-sm text-gray-700">
                    <NavLink to={`/jobs/${job._id}`}>
                        <p className="font-medium">
                            {job.title}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 inline-block ml-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13V6.75A2.25 2.25 0 0015.75 4.5H9" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9h6v6" />
                            </svg>
                        </p>
                    </NavLink>
                    <p>
                        📍 {job.isRemote ? "Remote" : job.location} • 💰 {job.salary}
                    </p>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                        {job.description}
                    </p>
                </div>
            </div>

            {/* Application Message */}
            <div className="mt-6 space-y-4">
                <div>
                    <h4 className="font-medium text-gray-700 mb-1">Message</h4>
                    <p className="bg-gray-50 border rounded p-4 text-sm text-gray-600">
                        {application.message}
                    </p>
                </div>

                {/* Resume */}
                <div>
                    <h4 className="font-medium text-gray-700 mb-1">Resume</h4>
                    <a
                        href={application.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                    >
                        Download Resume →
                    </a>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-medium text-gray-700 mb-1">Contact</h4>
                    <a
                        href={`mailto:${applicant.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                    >
                        Email Address →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ShowApplications;