import { useLocation } from 'react-router-dom';

const Job = () => {
    const { state: job } = useLocation();
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>Job Details</h1>
            <p className='text-gray-700'><strong>About:</strong> {job.title}</p>
            <p className='text-gray-700'><strong>Excerpt:</strong> {job.excerpt}</p>
            
            <p className='text-gray-700'><strong> Company Name:</strong> {job.CompanyName}</p>
            <p className='text-gray-700'><strong>Category:</strong> {job.category}</p>
            <p className='text-gray-700'><strong>Min Salary:</strong> Ksh{job.minSalary} - Ksh{job.maxSalary}</p>
            <p className='text-gray-700'><strong>Job Position:</strong> {job.seniority}</p>
            <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 text-2xl "><a href="Contact.jsx">Apply Now</a></button>
            <img  src={job.image} alt={job.title} className='w-full' />

        </div>
    );
};

export default Job;