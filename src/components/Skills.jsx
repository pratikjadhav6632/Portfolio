import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600', icon: '🚀' },
    { name: 'React.js', level: 72, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'Node.js', level: 78, color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-700', icon: '🍃' },
    { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600', icon: '🚄' },
    { name: 'HTML/CSS', level: 96, color: 'from-orange-400 to-orange-600', icon: '🎨' },
    { name: 'Git/GitHub', level: 87, color: 'from-purple-400 to-purple-600', icon: '📚' },
    { name: 'RESTful APIs', level: 79, color: 'from-indigo-400 to-indigo-600', icon: '🔗' }
  ];

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 72, description: 'Component-based UI development' },
        { name: 'JavaScript ES6+', level: 85, description: 'Modern JavaScript features' },
        { name: 'HTML5 & CSS3', level: 96, description: 'Semantic markup & styling' },
        { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS framework' },
        { name: 'Responsive Design', level: 84, description: 'Mobile-first approach' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 78, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 80, description: 'Web application framework' },
        { name: 'MongoDB', level: 85, description: 'NoSQL database management' },
        { name: 'RESTful APIs', level: 79, description: 'API design & development' },
        { name: 'Authentication', level: 66, description: 'JWT & OAuth implementation' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Code,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Git & GitHub', level: 87, description: 'Version control & collaboration' },
        { name: 'VS Code', level: 93, description: 'Development environment' },
        { name: 'Postman', level: 75, description: 'API testing & documentation' },
        { name: 'Cursor', level: 75, description: 'AI Powered IDE' }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index, delay = 0 }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-gray-800 font-semibold">{skill.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(skill.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm font-medium">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay + index * 150}ms`
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  const CategorySkill = ({ skill, index }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-900">{skill.name}</h4>
        <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{skill.description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-gray-600 mt-6 max-w-3xl mx-auto text-lg transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Progress Bars */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Zap className="h-6 w-6 text-blue-600 mr-3" />
                Proficiency Levels
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} delay={500} />
                ))}
              </div>
            </div>
          </div>

          {/* Skill Categories */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === key
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Skills */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                {React.createElement(skillCategories[activeCategory].icon, {
                  className: "h-6 w-6 text-blue-600 mr-3"
                })}
                <h3 className="text-2xl font-bold text-gray-900">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
              <div className="grid gap-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <CategorySkill key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript','SQL','PostgreSQL','Redux', 'Bootstrap', 
              'Firebase', 'Vercel', 'Netlify','Agile'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${900 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;