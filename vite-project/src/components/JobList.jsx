import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, deleteJob, updateJob }) => {
  return (
    <section className="jobs">
      <h2>Featured Jobs</h2>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          job={job}
          index={index}
          deleteJob={deleteJob}
          updateJob={updateJob}
        />
      ))}
    </section>
  );
};

export default JobList;