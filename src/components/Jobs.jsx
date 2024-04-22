import { useLocation } from 'react-router-dom';

const Job = () => {
    const { state: job } = useLocation();
    console.log(job);
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>Job Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {job.id}</p>
            <p className='text-gray-700'><strong>URL:</strong> {job.url}</p>
            <p className='text-gray-700'><strong>Title:</strong> {job.title}</p>
            <p className='text-gray-700'><strong> Company Name:</strong> ${job.Company_name}</p>
            <p className='text-gray-700'><strong>Company logo:</strong> ${job.company_logo}</p>
            <p className='text-gray-700'><strong>Category:</strong> {job.category}</p>
            <p className='text-gray-700'><strong>Salary:</strong> ${job.salary}</p>
            <p className='text-gray-700'><strong>Job Type:</strong> {job.job_type}</p>
            <p className='text-gray-700'><strong>Description:</strong> {job.description}</p>
            <img src={job.image} alt={job.title} className='w-full' />
        </div>
    );
};

export default Job;