import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Joblist = () => {
    const [jobs, setJob] = useState([]);
    const fetchJob = async () => {
        try {
            const response = await fetch('https://remotive.com/api/remote-jobs');
            if (!response.ok) {
                throw new Error('Failed to fetch Job');
            }
            const data = await response.json();
            setJob(data.results);
        } catch (error) {
            console.error('Error fetching Job:', error);
            setJob([]);
        }
    };
    useEffect(() => {
        fetchJob();
    }, []);
    console.log(jobs);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                jobs.map((job) => (
                    <div key={job.id} className='border p-4'>
                        <p>{job.id}</p>
                        <Link to={`/job/${job.id}`} state={job}>
                         <img src={job.company_logo} alt={job.title}/>
                         </Link>
                        <h4>{job.company_name}</h4>
                         <p > {job.category}</p>
                        <p> {job.job_type}</p>
                        <p>{job.publication}</p>
                      <p> {job.salary}</p> 
                        <Link to={`/job/${job.id}`} state={job}>
                            <button className='block w-full mt-2 bg-blue-300 hover'>View Job</button>
                        </Link>
                    </div>
                ))}
        </div>
    );
};
export default Joblist;