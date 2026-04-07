import React from "react";

const JobCard = ({ job, index, deleteJob, updateJob }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>

      <button className="update-btn" onClick={() => updateJob(index)}>
        Update
      </button>
      <button className="delete-btn" onClick={() => deleteJob(index)}>
        Delete
      </button>
    </div>
  );
};

export default JobCard;