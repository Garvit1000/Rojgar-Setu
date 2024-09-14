import React, { useState } from 'react';

const SectionEditor = ({ section, onUpdate }) => {
  const [data, setData] = useState(section.data);

  const handleInputChange = (event, index = null, field = null) => {
    const { name, value, files } = event.target;

    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = { ...data, profilePicture: reader.result };
        setData(updatedData);
        onUpdate(section.id, updatedData);
      };
      reader.readAsDataURL(file);
    } else if (index !== null && field !== null) {
      const updatedArray = [...data];
      updatedArray[index][field] = value;
      setData(updatedArray);
      onUpdate(section.id, updatedArray);
    } else {
      const updatedData = { ...data, [name]: value };
      setData(updatedData);
      onUpdate(section.id, updatedData);
    }
  };

  return (
    <div className="section-editor">
      {section.type === 'personalInfo' && (
        <>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            placeholder="Upload Profile Picture"
          />
          {data.profilePicture && (
            <img
              src={data.profilePicture}
              alt="Profile"
              className="profile-preview"
            />
          )}
        </>
      )}
      {/* Additional fields for other sections */}
    </div>
  );
};

export default SectionEditor;
