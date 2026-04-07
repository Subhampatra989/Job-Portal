import React, { useState } from "react";

const Hero = ({ searchJobs }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="hero">
      <h1>Find Your Dream Job</h1>
      <p>Search from thousands of opportunities</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title, company or location"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            searchJobs(e.target.value.toLowerCase());
          }}
        />
        <button onClick={() => searchJobs(keyword.toLowerCase())}>
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;