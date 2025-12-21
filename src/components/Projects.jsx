import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Gaplify',
      description: 'Career development platform for students and freshers with skill gap analysis, personalized roadmaps, mentorship, and resource hub.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753988400/Screenshot_2025-08-01_002909_zykpoa.png',
      technologies: ['MongoDB','Express', 'React.js','Node.js'],
      category: 'FullStack',
      githubUrl: 'https://github.com/pratikjadhav6632/Gaplify',
      featured: true,
      liveUrl: 'https://www.gaplify.in'
    },
    {
      id: 2,
      title: 'Foundrr product website',
      description: 'A clean and informative landing page showcasing the Foundrr mobile app, featuring download links and essential company details for users to explore with ease.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330686/Screenshot_2025-12-21_205056_m9wahg.png',
      technologies: ['HTML', 'CSS','React.js','Tailwind CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/foundrr-waiting-list',
      liveUrl: 'https://www.foundrr.co/',
      featured: true
    },
    {
      id: 3,
      title: 'Foundrr Mobile Application',
      description: 'Foundrr is a streamlined platform designed to help users discover, track, and manage opportunities with ease. The app delivers a clean interface, fast navigation, and smart features to enhance productivity and support growth.”',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330686/Screenshot_2025-12-21_205056_m9wahg.png',
      technologies: ['React Native', 'CSS','Tailwind CSS','node.js','expo','express.js','mongodb'],
      category: 'Mobile Application',
      githubUrl: 'https://github.com/pratikjadhav6632/Foundrr_Applciation',
      liveUrl: 'https://www.foundrr.co/',
      featured: true
    },
    {
      id: 4,
      title: 'Jotiba Construction Portfolio',
      description: 'A responsive portfolio website for Jotiba Construction showcasing their services, projects, and contact information.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330694/Screenshot_2025-12-21_205428_jiumcs.png',
      technologies: ['React.js', 'CSS','Tailwind CSS','TypeScript'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/jotiba-construction',
      liveUrl: 'https://jotiba-construction.vercel.app/',
      Ongoing: true
    },
    {
      id: 5,
      title: 'Foundrr',
      description: 'Full-stack networking platform for entrepreneurs with real-time chat, co-founder matching, user authentication, and Appwrite backend integration.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551335/Screenshot_2025-07-26_230313_ji4vn3.png',
      technologies: ['React', 'Typescript', 'Appwrite', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/Foundrr',
      liveUrl: 'https://foundrr-alpha.vercel.app/',
     
    },
    {
      id: 6,
      title: 'WonderNest',
      description: 'Full-stack hotel and room listing platform with CRUD operations, user reviews, and dynamic property viewing.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551851/Screenshot_2025-07-26_231352_ppuck9.png',
      technologies: ['EJS', 'Node.js', 'MongoDB', 'Express','Bootstrap'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/WonderNest',
      liveUrl: 'https://wondernest-zi50.onrender.com/',
     
    },
    
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, contact forms, and modern design.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330686/Screenshot_2025-12-21_205136_kkxerp.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://pratik-jadhav-portfolio.netlify.app/'
    },
    {
      id: 8,
      title: 'Foundrr Waiting List',
      description: 'Foundrr offers a clean, interactive way for users to join the waiting list through a simple form. Built with React and Tailwind, it delivers a smooth and modern experience.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330687/Screenshot_2025-12-21_205410_mrvsu4.png',
      technologies: ['HTML', 'CSS','React.js','Tailwind CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/foundrr-waiting',
      liveUrl: 'https://foundrr-waiting.vercel.app/',
      
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    {key:'Mobile Application',label:'Mobile Application'}
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-indigo-100 dark:hover:border-yellow-900/50 transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-gray-50 dark:bg-gray-800">
        <div className="absolute inset-0 bg-indigo-900/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {project.featured && (
            <span className="bg-indigo-600/90 dark:bg-yellow-500/90 backdrop-blur-sm text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Featured
            </span>
          )}
          {project.Ongoing && (
            <span className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Ongoing
            </span>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-yellow-500 transition-colors">
            {project.title}
          </h3>
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-500 transition-colors"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-50 dark:bg-yellow-900/20 text-indigo-700 dark:text-yellow-400 rounded-full text-xs font-medium border border-indigo-100 dark:border-yellow-900/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-medium group/btn"
          >
            <Github className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-yellow-500 text-white dark:text-gray-900 rounded-lg hover:bg-indigo-700 dark:hover:bg-yellow-400 hover:shadow-md transition-all text-sm font-medium"
            >
              <Eye className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Featured <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-yellow-500 mx-auto rounded-full mb-6 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            A showcase of my recent work, side projects, and open source contributions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-indigo-600 dark:bg-yellow-500 text-white dark:text-gray-900 shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
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
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;