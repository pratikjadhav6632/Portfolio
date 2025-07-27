import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Foundrr',
      description: 'Full-stack networking platform for entrepreneurs with real-time chat, co-founder matching, user authentication, and Appwrite backend integration.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551335/Screenshot_2025-07-26_230313_ji4vn3.png',
      technologies: ['React', 'Typescript', 'Appwrite', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/Foundrr',
      liveUrl: 'https://foundrr.co',
      featured: true
    },
    {
      id: 2,
      title: 'WonderNest',
      description: 'Full-stack hotel and room listing platform with CRUD operations, user reviews, and dynamic property viewing.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551851/Screenshot_2025-07-26_231352_ppuck9.png',
      technologies: ['EJS', 'Node.js', 'MongoDB', 'Express','Bootstrap'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/WonderNest',
      liveUrl: 'https://wondernest-zi50.onrender.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, contact forms, and modern design.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753596459/Screenshot_2025-07-27_113639_bsxinq.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: ''
    },
    {
      id: 4,
      title: 'Amazon Clone',
      description: 'Static Amazon clone built using HTML and CSS, replicating homepage layout, product sections, and responsive design.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753552046/Screenshot_2025-07-26_231713_lilroy.png',
      technologies: ['HTML', 'CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/Amazon.com_clone',
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
            >
              <Eye className="h-4 w-4" />
              Live
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;