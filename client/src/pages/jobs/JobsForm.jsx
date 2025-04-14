import React, {useEffect, useState} from 'react';
import {DefaultTextarea, InputBox, SingleSelect} from "@/components/FormInputs.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "@/libs/axios.js"
import {useAlert} from "@/contexts/AlertContext.jsx";
import {useAuth} from "@/contexts/AuthContext.jsx";

const JobsForm = () => {
    const [job, setJob] = useState({
        title: '',
        description: '',
        location: '',
        isRemote: true,
        salary: ''
    });
    const options = [{id: 'remote', name: 'Remote'}, {id: 'non-remote', name: 'Not Remote'}]
    const [selected, setSelected] = useState('remote')
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const { id } = useParams();
    const { user } = useAuth()

    const getJob = async () => {
        try {
            let response = await axios.get(`jobs/${id}`)
            if (response.data.data.job.createdBy._id.toString() !== user._id.toString()) {
                showAlert('You cannot edit this job.', false)
                navigate(`/jobs`)
            }

            setJob(response.data.data.job);
            setSelected(response.data.data.job.isRemote ? 'remote' : 'non-remote');
        } catch (error) {
            let message = error?.response?.data?.error || 'Something went wrong.';
            showAlert(message, false);
            navigate('/jobs');
        }
    }

    useEffect(() => {
        if (id) {
            getJob();
        }
    }, [id])

    const createJob = async () => {
        if (!job.title || !job.description || !job.location || !job.salary) {
            showAlert('All fields required', false)
            return;
        }

        setSaving(true);
        try {
            const response = await axios.post('/jobs', job);
            setJob(response.data.data.job);
            showAlert('Job created successfully', true);
            navigate('/jobs');
        } catch (error) {
            let message = error?.response?.data?.error || 'Something went wrong';
            showAlert(message, false)
        } finally {
            setSaving(false);
        }
    }

    const updateJob = async () => {
        if (!job.title || !job.description || !job.location || !job.salary) {
            showAlert('All fields required', false)
            return;
        }

        setSaving(true);
        try {
            const response = await axios.put(`/jobs/${id}`, job);
            setJob(response.data.data.job);
            showAlert('Job updated successfully', true);
            navigate('/jobs');
        } catch (error) {
            let message = error?.response?.data?.error || 'Something went wrong';
            showAlert(message, false)
        } finally {
            setSaving(false);
        }
    }

    return (
        <section className="relative mx-auto max-w-[525px] lg:max-w-[700px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px] mt-10">
            <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                {id ? 'Update Job' : `Create Job`}
            </h2>
            <form>
                <label className='mb-[10px] block text-base font-medium text-left text-dark dark:text-white'>
                    Title
                </label>
                <InputBox
                    type='text'
                    name='name'
                    placeholder='Title'
                    value={job.title}
                    handleInputChange={(value) => setJob({...job, title: value})}
                />

                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                    Description
                </label>
                <DefaultTextarea
                    placeholder="Description"
                    value={job.description}
                    handleInputChange={(value) => setJob({...job, description: value})}
                />

                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                    Location
                </label>
                <InputBox
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    handleInputChange={(value) => setJob({...job, location: value})}
                />

                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white text-left'>
                    Salary
                </label>
                <InputBox
                    type="text"
                    name="salar"
                    placeholder="Salary"
                    value={job.salary}
                    handleInputChange={(value) => setJob({...job, salary: value})}
                />

                <SingleSelect
                    value={selected}
                    handleSelectChange={(value) => {
                        setSelected(value);
                        setJob({...job, isRemote: value === 'remote'});
                    }}
                    options={options}
                />


                <div className="mb-10 mt-10 flex justify-between">
                    <input
                        type="button"
                        value="Cancel"
                        className="w-[48%] mt-5 cursor-pointer rounded-md border border-danger bg-danger px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                        onClick={() => navigate('/jobs')}
                        disabled={saving}
                    />
                    <button
                        type="button"
                        className="w-[48%] mt-5 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                        onClick={id ? updateJob : createJob}
                        disabled={saving}
                    >
                        {saving &&
                            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin align-middle mr-2"></span>
                        }
                        {id ? 'Update' : 'Create'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default JobsForm;