import React from 'react';

const Skills = () => {
  const frontendRow1 = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  ];

  const frontendRow2 = [
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
  ];

  const backendRow1 = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  ];

  const backendRow2 = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    {name:'GitHub',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'},
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    {name:'vercel',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg'},
    {name:'Netlify',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
    },
    {name:'render',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg'}
  ];

  const SkillCard = ({ name, icon }) => (
    <div className="flex items-center space-x-3 dark:bg-white bg-gray-50/50 dark:bg-gray-900/50 px-6 py-3 rounded-xl border border-gray-100 dark:border-gray-800 mx-3 min-w-max hover:bg-white dark:hover:bg-gray-900 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300">
      <img src={icon} alt={name} className="h-6 w-6 object-contain" />
      <span className="text-gray-700 dark:text-gray-600 font-medium text-base">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Skills & <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-yellow-500 mx-auto rounded-full mb-6 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            Crafting responsive, robust, and scalable applications with a modern tech stack.
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        {/* Frontend Section */}
        <div className="flex flex-col space-y-4">
          <div className="px-4 md:px-8 text-gray-900 dark:text-white font-bold text-lg tracking-wide uppercase mb-2 text-center md:text-left transition-colors duration-300">
            Frontend
          </div>
          
          {/* Frontend Row 1 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll">
              {[...frontendRow1, ...frontendRow1, ...frontendRow1, ...frontendRow1].map((skill, index) => (
                <SkillCard key={`f1-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Frontend Row 2 - Right */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll-reverse">
              {[...frontendRow2, ...frontendRow2, ...frontendRow2, ...frontendRow2].map((skill, index) => (
                <SkillCard key={`f2-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="flex flex-col space-y-4">
          <div className="px-4 md:px-8 text-gray-900 dark:text-white font-bold text-lg tracking-wide uppercase mb-2 text-center md:text-left transition-colors duration-300">
             Backend & Tools
          </div>

          {/* Backend Row 1 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll ">
              {[...backendRow1, ...backendRow1, ...backendRow1, ...backendRow1].map((skill, index) => (
                <SkillCard key={`b1-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Backend Row 2 - Right */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll-reverse">
              {[...backendRow2, ...backendRow2, ...backendRow2, ...backendRow2].map((skill, index) => (
                <SkillCard key={`b2-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;