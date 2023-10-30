import React, { useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project 1',
      link: 'https://example.com',
      description: 'A sample project with an exciting description.',
      year: 2022,
      status: 'In Progress',
      image: 'https://via.placeholder.com/150',
    },
    
    {
      id: 2,
      name: 'Project 2',
      link: 'https://example.com',
      description: 'Another project with a detailed description.',
      year: 2021,
      status: 'Completed',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    link: '',
    description: '',
    year: 0,
    status: 'In Progress',
    image: '',
  });
  const [editProject, setEditProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const addProject = () => {
    if (newProject.name && newProject.link) {
      if (editProject) {
        const updatedProjects = projects.map((project) =>
          project.id === editProject.id
            ? { ...newProject, status: project.status }
            : project
        );
        setProjects(updatedProjects);
        setEditProject(null);
      } else {
        setProjects([...projects, { ...newProject, id: Date.now() }]);
      }
      setNewProject({
        name: '',
        link: '',
        description: '',
        year: 0,
        status: 'In Progress',
        image: '',
      });
    }
  };

  const deleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const editProjectItem = (project) => {
    setNewProject({ ...project });
    setEditProject(project);
  };

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const changeStatus = (id, newStatus) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const confirmDeleteProject = (project) => {
    setProjectToDelete(project);
    setConfirmDelete(true);
  };

  const cancelDelete = () => {
    setConfirmDelete(false);
    setProjectToDelete(null);
  };

  const proceedWithDelete = () => {
    if (projectToDelete) {
      deleteProject(projectToDelete.id);
      setConfirmDelete(false);
      setProjectToDelete(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProject({ ...newProject, image: reader.result });
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 p-3 bg-gray-800 text-white rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg transition-transform hover:scale-105 relative"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <img src={project.image} alt={project.name} className="mb-2 rounded-lg" />
            <p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </a>
            </p>
            <p className="text-gray-300 mt-2">Year: {project.year}</p>
            {editProject === project ? (
              <div className="text-gray-300 mt-2">
                Status:{' '}
                <select
                  value={project.status}
                  onChange={(e) => changeStatus(project.id, e.target.value)}
                  className="bg-gray-800 text-white rounded-md"
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            ) : (
              <p className="text-gray-300 mt-2">Status: {project.status}</p>
            )}
            <p className="text-gray-300 mt-2">Description: {project.description}</p>
            <div className="flex justify-end mt-4 space-x-2 absolute bottom-4 right-4">
              <button
                onClick={() => editProjectItem(project)}
                className="text-purple-600 hover:text-purple-800 text-base"
              >
                Edit
              </button>
              <button
                onClick={() => confirmDeleteProject(project)}
                className="text-red-600 hover:text-red-800 text-base"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Add New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          className="w-full p-3 mb-2 bg-gray-800 text-white rounded-md"
        />
        <input
          type="text"
          placeholder="Project Link"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
          className="w-full p-3 mb-2 bg-gray-800 text-white rounded-md"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="w-full p-3 mb-2 bg-gray-800 text-white rounded-md"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-3 mb-2 bg-gray-800 text-white rounded-md"
        />
        <input
          type="number"
          placeholder="Project Year"
          value={newProject.year}
          onChange={(e) => setNewProject({ ...newProject, year: Number(e.target.value) })}
          className="w-full p-3 mb-2 bg-gray-800 text-white rounded-md"
        />
        <button
          onClick={addProject}
          className='btn btn-sm'
        >
          {editProject ? 'Update' : 'Add'}
        </button>
      </div>
      {confirmDelete && (
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-xl text-white font-semibold mb-4">
            Are you sure you want to delete this project?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={cancelDelete}
              className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={proceedWithDelete}
              className="bg-red-600 hover:bg-red-800 text-white p-3 rounded-md"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;