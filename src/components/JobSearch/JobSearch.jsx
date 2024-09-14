import React, { useState } from 'react';
import jobsData from '../../assets/csvjson.json';
import { Link } from 'react-router-dom';
import './JobSearch.css';

const JobSearch = () => {
  const [input, setInput] = useState('');
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [expanded, setExpanded] = useState({});

  const matchScore = (term, text) => {
    const lowerTerm = term.toLowerCase();
    const lowerText = text.toLowerCase();
    return lowerText.indexOf(lowerTerm) !== -1 ? 1 : 0;
  };

  const findRelatedJobs = (term) => {
    if (!term) return;

    const jobSuggestions = jobsData.map(job => {
      const titleScore = matchScore(term, job.jobtitle) * 3;
      const descriptionScore = matchScore(term, job.jobdescription) * 2;
      const skillsScore = matchScore(term, job.skills);
      const totalScore = titleScore + descriptionScore + skillsScore;

      return { ...job, score: totalScore };
    });

    const filteredJobs = jobSuggestions
      .filter(job => job.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setRelatedJobs(filteredJobs);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);
    findRelatedJobs(searchTerm);
  };

  const toggleReadMore = (jobId) => {
    setExpanded(prevState => ({
      ...prevState,
      [jobId]: !prevState[jobId]
    }));
  };

  return (
    <div className="job-search-page">
    <div className="job-search-container">
      <input
        type="text"
        placeholder="Search jobs..."
        value={input}
        onChange={handleSearch}
      />
      <ul>
        {relatedJobs.length === 0 && input && <p>No related jobs found</p>}
        {relatedJobs.map(job => (
          <li key={job.uniq_id}>
            <div className="job-details">
              <h3>{job.jobtitle}</h3>
              <p>
                {expanded[job.uniq_id]
                  ? job.jobdescription
                  : `${job.jobdescription.slice(0, 100)}... `}
                <span
                  className="read-more"
                  onClick={() => toggleReadMore(job.uniq_id)}
                >
                  {expanded[job.uniq_id] ? 'Read Less' : 'Read More'}
                </span>
              </p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.joblocation_address}</p>
            </div>
            <div className="action-buttons">
              <Link to={`/job/${job.uniq_id}`}>
                <button className="view-details-btn">Apply Now</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default JobSearch;
