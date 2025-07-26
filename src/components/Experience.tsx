import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projectsAchievements = [
    {
      id: 1,
      period: '2024',
      title: 'Portfolio Website',
      company: 'Personal Project',
      description: 'Built a responsive portfolio website using React and Tailwind CSS to showcase my skills and projects.'
    },
    {
      id: 2,
      period: '2023',
      title: 'Hackathon Participant',
      company: 'TechFest Hackathon',
      description: 'Collaborated with a team to develop a web application for event management within 24 hours.'
    },
    {
      id: 3,
      period: '2022',
      title: 'Open Source Contributor',
      company: 'GitHub Projects',
      description: 'Contributed bug fixes and feature improvements to open source repositories related to web development.'
    }
  ];

  const education = [
    {
      id: 1,
      period: '2023 - 2027',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Ajay Kumar Garg Engineering College',
      description: 'Currently pursuing B.Tech with a focus on software development and algorithms.'
    },
    {
      id: 2,
      period: '2021 - 2023',
      title: 'Intermediate (12th)',
      institution: 'Board of Intermediate Education',
      description: 'Scored 94% with focus on science and mathematics.'
    },
    {
      id: 3,
      period: '2019 - 2021',
      title: 'High School (10th)',
      institution: 'Board of Secondary Education',
      description: 'Scored 96% with honors in Mathematics and Computer Science.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-16">Projects & Education</h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/20 p-3 rounded-full">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Projects & Achievements</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border/30">
              {projectsAchievements.map((item, index) => (
                <div 
                  key={item.id}
                  className={`mb-12 relative transition-all duration-700 ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-[41px] bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                    {item.id}
                  </div>
                  <div className="absolute -left-[41px] mt-10 bg-border/30 w-px h-full"></div>
                  <div className="bg-card rounded-lg p-6 border border-border/20 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted mb-4">{item.company}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-secondary/20 p-3 rounded-full">
                <GraduationCap className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border/30">
              {education.map((item, index) => (
                <div 
                  key={item.id}
                  className={`mb-12 relative transition-all duration-700 ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className="absolute -left-[41px] bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center">
                    {item.id}
                  </div>
                  <div className="absolute -left-[41px] mt-10 bg-border/30 w-px h-full"></div>
                  <div className="bg-card rounded-lg p-6 border border-border/20 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted mb-4">{item.institution}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/tanisha_resume1.pdf" 
            download 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
