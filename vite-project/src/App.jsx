import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostJob from "./components/PostJob";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [
      { title: "Frontend Developer", company: "Microsoft", location: "Bangalore" },
      { title: "Backend Developer", company: "Amazon", location: "Pune" },
      { title: "UI/UX Designer", company: "Adobe", location: "Chennai" }
    ];
    setJobs(storedJobs);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const updated = jobs.filter((_, i) => i !== index);
    setJobs(updated);
  };

  const updateJob = (index) => {
    const newTitle = prompt("Enter new title:", jobs[index].title);
    const newCompany = prompt("Enter new company:", jobs[index].company);
    const newLocation = prompt("Enter new location:", jobs[index].location);

    if (newTitle && newCompany && newLocation) {
      const updated = [...jobs];
      updated[index] = {
        title: newTitle,
        company: newCompany,
        location: newLocation
      };
      setJobs(updated);
    }
  };

  const searchJobs = (keyword) => {
    return jobs.filter(job =>
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword)
    );
  };

  return (
    <>
      <Navbar />
      <Hero searchJobs={searchJobs} setJobs={setJobs} />
      <PostJob addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />
    </>
  );
}

export default App;