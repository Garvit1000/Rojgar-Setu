import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionEditor from './SectionEditor';
import ResumePreview from './ResumePreview';
import './ResumeEditor.css';

const ItemType = {
  SECTION: 'section',
};

const SectionItem = ({ section, index, moveSection, onUpdate }) => {
  const [, ref] = useDrag({
    type: ItemType.SECTION,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.SECTION,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="draggable-section">
      <SectionEditor section={section} onUpdate={onUpdate} />
    </div>
  );
};


const ResumeEditor = () => {
  const [sections, setSections] = useState([
    { id: 1, type: 'personalInfo', data: { name: '', email: '', phone: '', profilePicture: null } }, // Added profilePicture
    { id: 2, type: 'experience', data: [{ company: '', role: '', description: '' }] },
    { id: 3, type: 'education', data: [{ school: '', degree: '', year: '' }] },
    { id: 4, type: 'skills', data: [''] },
  ]);

  
  const updateSection = (id, newData) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, data: newData } : section
    ));
  };

 
  const moveSection = (fromIndex, toIndex) => {
    const updatedSections = [...sections];
    const [movedSection] = updatedSections.splice(fromIndex, 1);
    updatedSections.splice(toIndex, 0, movedSection);
    setSections(updatedSections);
  };

  
  const exportToPDF = () => {
    const resume = document.querySelector('.resume-preview');
    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="resume-builder">
        <div className="editor">
          <h2>Edit Your Resume</h2>
          {sections.map((section, index) => (
            <SectionItem
              key={section.id}
              section={section}
              index={index}
              moveSection={moveSection}
              onUpdate={updateSection}
            />
          ))}
        </div>

        <ResumePreview sections={sections} />

        <button onClick={exportToPDF} className="btn-export">
          Export as PDF
        </button>
      </div>
    </DndProvider>
  );
};

export default ResumeEditor;
