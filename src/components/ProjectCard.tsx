import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from './Projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  inView: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, inView, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group cursor-pointer hover:scale-[1.02] hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary/80 text-white p-2 rounded-full">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;