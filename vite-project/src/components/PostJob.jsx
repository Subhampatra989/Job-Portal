import React, { useState } from "react";

const PostJob = ({ addJob }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleAdd = () => {
    if (title && company && location) {
      addJob({ title, company, location });
      setTitle("");
      setCompany("");
      setLocation("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <section className="post-job">
      <h2>Post a Job</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button onClick={handleAdd}>Post Job</button>
    </section>
  );
};

export default PostJob;