import React from 'react';

const ResumePreview = ({ sections }) => {
  return (
    <div className="resume-preview">
      {sections.map((section) => (
        <div key={section.id} className="resume-section">
          {section.type === 'personalInfo' && (
            <>
              {section.data.profilePicture && (
                <img
                  src={section.data.profilePicture}
                  alt="Profile"
                  className="resume-profile-pic"
                />
              )}
              <h1>{section.data.name}</h1>
              <p>Email: {section.data.email}</p>
              <p>Phone: {section.data.phone}</p>
            </>
          )}
          {section.type === 'experience' && (
            <>
              <h2>Experience</h2>
              {section.data.map((experience, index) => (
                <div key={index}>
                  <p>Company: {experience.company}</p>
                  <p>Role: {experience.role}</p>
                  <p>Description: {experience.description}</p>
                </div>
              ))}
            </>
          )}
          {section.type === 'education' && (
            <>
              <h2>Education</h2>
              {section.data.map((education, index) => (
                <div key={index}>
                  <p>School: {education.school}</p>
                  <p>Degree: {education.degree}</p>
                  <p>Year: {education.year}</p>
                </div>
              ))}
            </>
          )}
          {section.type === 'skills' && (
            <>
              <h2>Skills</h2>
              <ul>
                {section.data.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;
