import React, { useState } from 'react';
import { Github, ArrowUpRight, Code2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Gaplify',
      description: 'Career development platform for students and freshers with skill gap analysis, personalized roadmaps, mentorship, and resource hub.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753988400/Screenshot_2025-08-01_002909_zykpoa.png',
      technologies: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/Gaplify',
      featured: true,
      liveUrl: 'https://www.gaplify.in'
    },
    {
      id: 2,
      title: 'Foundrr Product Website',
      description: 'A clean and informative landing page showcasing the Foundrr mobile app, featuring download links and essential company details for users to explore with ease.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330686/Screenshot_2025-12-21_205056_m9wahg.png',
      technologies: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/foundrr-waiting-list',
      liveUrl: 'https://www.foundrr.co/',
      featured: true
    },
    {
      id: 3,
      title: 'Foundrr Mobile Application',
      description: 'Foundrr is a streamlined platform designed to help users discover, track, and manage opportunities with ease. The app delivers a clean interface, fast navigation, and smart features.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1770179584/Screenshot_2026-02-04_100037_zpixoh.png',
      technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'mobile',
      githubUrl: 'https://github.com/pratikjadhav6632/Foundrr_Applciation',
      liveUrl: 'https://www.foundrr.co/',
      featured: true
    },
    {
      id: 4,
      title: 'Jotiba Construction Portfolio',
      description: 'A responsive portfolio website for Jotiba Construction showcasing their services, civil engineering projects, and contact information.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330694/Screenshot_2025-12-21_205428_jiumcs.png',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/jotiba-construction',
      liveUrl: 'https://jotiba-construction.vercel.app/',
      ongoing: true
    },
    {
      id: 5,
      title: 'SMB Rise Digital Portfolio',
      description: 'A responsive portfolio website for SMB Rise Digital (Ireland) showcasing services, blogs, and an admin panel for dynamic blog tracking.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1770179918/Screenshot_2026-02-04_100820_qh5afu.png',
      technologies: ['Next.js', 'MongoDB', 'Node.js', 'Express.js', 'SEO'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/SMB-media',
      liveUrl: 'https://smb-media.vercel.app/',
      ongoing: true
    },
    {
      id: 6,
      title: 'Foundrr MVP',
      description: 'Full-stack networking platform for entrepreneurs with real-time chat, co-founder matching, user authentication, and Appwrite backend integration.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551335/Screenshot_2025-07-26_230313_ji4vn3.png',
      technologies: ['React', 'TypeScript', 'Appwrite', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/Foundrr',
      liveUrl: 'https://foundrr-alpha.vercel.app/'
    },
    {
      id: 7,
      title: 'WonderNest',
      description: 'Full-stack hotel and room listing platform with complete CRUD operations, user reviews, and dynamic property booking workflow.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1753551851/Screenshot_2025-07-26_231352_ppuck9.png',
      technologies: ['EJS', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
      category: 'fullstack',
      githubUrl: 'https://github.com/pratikjadhav6632/WonderNest',
      liveUrl: 'https://wondernest-zi50.onrender.com/'
    },
    {
      id: 8,
      title: 'Foundrr Waiting List',
      description: 'Interactive waiting list portal with custom form validation and instant feedback built with React and Tailwind.',
      image: 'https://res.cloudinary.com/dgxzpenl5/image/upload/v1766330687/Screenshot_2025-12-21_205410_mrvsu4.png',
      technologies: ['React.js', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      githubUrl: 'https://github.com/pratikjadhav6632/foundrr-waiting',
      liveUrl: 'https://foundrr-waiting.vercel.app/'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group bg-[#141612] rounded-[1.75rem] border border-[#242820] hover:border-[#3a4132] hover:bg-[#181a15] overflow-hidden transition-all duration-200 flex flex-col h-full hover:shadow-2xl hover:shadow-black/60">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-[#181b15] border-b border-[#20241b]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141612] via-transparent to-black/20 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2">
          {project.featured && (
            <span className="bg-[#d4ff32] text-neutral-950 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tight shadow-md">
              Featured
            </span>
          )}
          {project.ongoing && (
            <span className="bg-[#ff6b57] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tight shadow-md">
              Active
            </span>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal group-hover:text-[#d4ff32] transition-colors">
            {project.title}
          </h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-[#20241b] transition-colors"
              aria-label="Open live site"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="text-neutral-400 text-xs sm:text-sm mb-6 leading-relaxed flex-grow font-sans">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#1a1c17] text-neutral-300 rounded-full text-[11px] font-mono border border-[#272c21]"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#20241c]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1d16] hover:bg-[#22271e] text-neutral-300 hover:text-white rounded-full transition-all text-xs font-semibold border border-[#2b3124]"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Source Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#d4ff32] hover:bg-[#c2ed23] text-neutral-950 rounded-full transition-all text-xs font-bold shadow-md shadow-[#d4ff32]/10"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-[#0e100c] text-[#f4f3ea] relative overflow-hidden border-t border-[#1d2119]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#22261e]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3">
              <span className="text-[#d4ff32] font-bold">04</span>
              <span className="text-neutral-600">/</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              Featured <span className="italic text-[#d4ff32]">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
            Real products shipped to production with clean architecture and modern stacks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 uppercase ${
                activeFilter === filter.key
                  ? 'bg-[#d4ff32] text-neutral-950 font-bold shadow-md shadow-[#d4ff32]/10'
                  : 'bg-[#141612] text-neutral-400 hover:text-white border border-[#242820] hover:border-[#3a4132]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;