import { useLocation } from 'react-router-dom';

const Job = () => {
    const { state: job } = useLocation();
    return (
        <div className='max-w-md mx-auto bg-neutral-400 p-5 shadow-lg rounded-lg overflow-hidden mb-28 mt-9 font-bold'>
            <img  src={job.image} alt={job.title} className='w-full rounded-lg'/>
            <h1 className='text-2xl font-bold mb-2 mt-5 text-center'>Job Details</h1>
            <p className='text-gray-800'><strong>About:</strong> {job.title}</p>
            <p className='text-gray-800'><strong>Excerpt:</strong> {job.excerpt}</p>
            
            <p className='text-gray-800'><strong> Company Name:</strong> {job.CompanyName}</p>
            <p className='text-gray-800'><strong>Category:</strong> {job.category}</p>
            <p className='text-gray-800'><strong>Salary range:</strong> USD{job.minSalary} - {job.maxSalary}USD</p>
            <p className='text-gray-800'><strong>Job Position:</strong> {job.seniority}</p>
            <a href={job.applicationLink}><button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-20 py-5 text-center me-2 mb-3 dark:focus:ring-yellow-900 text-2xl text-bold mt-3 ml-24">Apply Now</button></a>
            

        </div>
    );
};

export default Job;