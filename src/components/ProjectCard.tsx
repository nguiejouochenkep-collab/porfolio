import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <button onClick={() => window.open(project.repositoryUrl, '_blank')}>Repository</button>
      <button onClick={() => window.open(project.deployedUrl, '_blank')}>Deployed App</button>
      <button onClick={openModal}>Details</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>{project.name} Details</h2>
        <p><strong>Context:</strong> {project.context}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Result:</strong> {project.result}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ProjectCard;