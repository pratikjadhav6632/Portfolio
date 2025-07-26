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
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pratik</span>
            </h1>
            <div className="text-2xl md:text-4xl text-gray-700 h-16 flex items-center justify-center">
              <span className="font-medium">{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-blue-600`}>|</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating scalable web applications with modern technologies. 
            Specializing in MongoDB, Express.js, React, and Node.js to bring ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ExternalLink className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2"
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
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-jadhav--/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:pratikjadhav6632@gmail.com"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <button className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200 flex items-center gap-1">
              <a href="https://drive.google.com/file/d/1EG_FGaJfjDFRqfItSkwWmdNpPa3WmrZU/view?usp=sharing" download className="underline">
              <Download className="h-6 w-6" />
              </a>
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;