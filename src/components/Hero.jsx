import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'MERN Stack Developer',
    'JavaScript Enthusiast',
    'Fullstack Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let currentText = texts[textIndex];

    const typeTimer = setInterval(() => {
      if (!isDeleting) {
        setText(currentText.slice(0, charIndex));
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1500); // Pause at end
        }
      } else {
        setText(currentText.slice(0, charIndex));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setTextIndex((prev) => (prev + 1) % texts.length);
          clearInterval(typeTimer);
        }
      }
    }, isDeleting ? 50 : 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, [textIndex]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
      {/* Background decoration - clean/minimal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-50/50 dark:bg-yellow-900/10 blur-3xl transition-colors duration-300"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-50/50 dark:bg-yellow-900/10 blur-3xl transition-colors duration-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Hi, I'm <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Pratik</span>
            </h1>
            <div className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 h-16 flex items-center justify-center transition-colors duration-300">
              <span className="font-medium">{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-indigo-600 dark:text-yellow-500`}>|</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Passionate about creating scalable web applications with modern technologies. 
            Specializing in MongoDB, Express.js, React, and Node.js to bring ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-indigo-600 dark:bg-yellow-500 text-white dark:text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-indigo-700 dark:hover:bg-yellow-400 hover:shadow-lg transform transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ExternalLink className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-indigo-600 dark:border-yellow-500 text-indigo-600 dark:text-yellow-500 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-gray-900 transition-all duration-200 flex items-center gap-2"
            >
              Get In Touch
              <Mail className="h-4 w-4" />
            </button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/pratikjadhav6632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-500 transform hover:scale-110 transition-all duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-jadhav--/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-500 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:pratikjadhav6632@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-yellow-500 transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <button className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-500 transform hover:scale-110 transition-all duration-200 flex items-center gap-1">
              <a href="https://drive.google.com/file/d/1vNWdNRVQqMlDfOErnZnA09VbInuLxOcI/view?usp=sharing" download className="underline">
              <Download className="h-6 w-6" />
              </a>
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-indigo-600 dark:hover:text-yellow-500 transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;