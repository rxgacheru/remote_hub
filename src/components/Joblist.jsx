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
        
        <div className='grid grid-cols-3 gap-4 bg-gray-700 rounded-full gap-x-4'>
            {
                    jobs.map((job) => (
    
                    <div key={job.id}  className='border p-4 bg-white'>
                        <p>{job.id}</p>
                        <Link to={`/job/${job.id}`} state={job}>
                         <img className='rounded-t-lg' src={job.image} />
                         </Link>
                         <h4>{`Company: ${job.companyName}`}</h4>
                         <p> {`Min Salary : Ksh${job.minSalary} - Ksh${job.maxSalary}`}</p>
                         <p>{`Location : ${job.locationRestrictions}`}</p>
                         <p>{`Seniority : ${job.seniority}`}</p>
                        <Link to={`/job/${job.id}`} state={job}>
                            <button className='block w-full mt-2 bg-blue-300 hover'>View Job</button>
                        </Link>
                    </div>
                ))
              }
        </div>
    );
};

export default Joblist; 
