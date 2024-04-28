import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Joblist = () => {
    const [jobs, setJobs] = useState([]);
    const fetchJobs = async () => {
        try {
            const response = await fetch(' https://himalayas.app/jobs/api?limit=100&offset=10');
            if (!response.ok) {
                throw new Error('Failed to fetch job');
            }
            const data = await response.json();
            setJobs(data.jobs);
            console.log(jobs)
            .then(response => response.json())
            .then(json => setJobs(json)) 
        } catch (error) {
            con
            setJobs([]);
        }
    };
    useEffect(() => {
        fetchJobs();
        console.log(jobs);      

    }, []);

    return (
        
        <div className='grid grid-cols-3 gap-4 bg-white rounded-full gap-x-4 text-gray-800'>
            {
                    jobs.map((job) => (
    
                    <div key={job.id}  className='border p-3 bg-neutral-400 ml-9 mr-9 mt-8 mb-8
                    rounded-lg font-bold mt-5 '>
                        <p>{job.id}</p>
                        <Link to={`/job/${job.id}`} state={job}>
                         <img className='rounded-lg mt-3' src={job.image} />
                         </Link>
                         <h4 className='mt-4 '>{`Company: ${job.companyName}`}</h4>
                         <p> {`Salary Range : Ksh${job.minSalary} - Ksh${job.maxSalary}`}</p>
                         <p>{`Location : ${job.locationRestrictions}`}</p>
                         <p>{`Seniority : ${job.seniority}`}</p>
                        <Link to={`/job/${job.id}`} state={job}>
                            <button className='text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-20 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900 text-2xl font-bold ml-16 mt-6'>View Job</button>
                        </Link>
                    </div>
                ))
              }
        </div>
    );
};

export default Joblist; 
