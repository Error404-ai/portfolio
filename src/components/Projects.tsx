import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useInView } from 'react-intersection-observer';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
{
  id: 1,
  title: 'Quiz Portal',
  description: 'A full-featured Quiz Portal for hosting multi-round competitions with user and admin dashboards.',
  longDescription: 'This Quiz Portal enables multi-round competitions with user authentication, real-time tracking, and admin management features. Built using Node.js, Express, MongoDB, JWT, and React, it ensures a smooth and secure quiz experience.',
  image: '/images/quiz.png',
  technologies: ['Node.js', 'Express.js', 'MongoDB'],
  github: 'https://github.com/Error404-ai/Quiz-Portal',
  liveDemo: 'https://main.d2uvh2n3e8dgqn.amplifyapp.com/',
}
,
  {
  id: 2,
  title: 'Plants vs Zombies Game',
  description: 'A browser-based tower defense game inspired by the classic Plants vs Zombies, built with web technologies.',
  longDescription: 'This game replicates the core mechanics of Plants vs Zombies using HTML, CSS, and JavaScript. It features dynamic animations, interactive gameplay, and logic-driven zombie waves, offering an engaging experience for web users.',
  image: '/images/game (1).png',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/Error404-ai/task_3',
  liveDemo: 'https://task3-beta-three.vercel.app/',
},
  {
  id: 3,
  title: 'Music App Backend',
  description: 'A scalable backend for a music streaming platform with secure authentication and user management features.',
  longDescription: 'This backend system powers a full-featured music app with email OTP verification, JWT-based authentication, Google OAuth, password reset flow, and user profile management. Built using Node.js, Express.js, MongoDB, and Docker, it ensures security, scalability, and performance for real-time music access.',
  image: '/images/Screenshot 2025-06-07 115006.png',
  technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker', 'Nodemailer', 'Google OAuth'],
  github: 'https://github.com/Error404-ai/music_app',
},
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <h2 className="section-title mb-8">My Projects</h2>
        
        <p className="text-center text-muted max-w-2xl mx-auto mb-16">
          Here are some of my recent backend development projects. Each one demonstrates my
          approach to solving complex technical challenges.
        </p>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => openProject(project)}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
};

export default Projects;