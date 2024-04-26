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
            <p className='text-gray-700'><strong>Min Salary:</strong> Ksh {job.minSalary}</p>
            <p className='text-gray-700'><strong>Max Salary:</strong> Ksh {job.maxSalary}</p>
            <p className='text-gray-700'><strong>Job Position:</strong> {job.seniority}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="contact">Apply Now</a>
          </button>
            <img  src={job.image} alt={job.title} className='w-full' />

        </div>
    );
};

export default Job;