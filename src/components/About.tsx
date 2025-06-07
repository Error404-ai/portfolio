import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import SkillBar from './SkillBar';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Node.js', percentage: 95 },
    { name: 'Express', percentage: 92 },
    { name: 'MongoDB', percentage: 90 },
     { name: 'REST APIs', percentage: 85 },
    { name: 'Docker', percentage: 75 },
   { name: 'AWS', percentage: 60 },
  ];

  const stats = [
    { label: 'Hours Of Practice', value: 100 },
    { label: 'Projects Completed', value: 6 },
    { label: 'Tech Tools Mastered', value: 8 },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-16">About Me</h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>

            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 overflow-hidden rounded-full border-4 border-primary/30">
               <img 
  src="/images/tanishaimage.jpg" 
  alt="Tanisha Bhatt"
  className="w-full h-full object-cover scale-150 origin-center" 
/>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:bottom-4 lg:right-20 bg-card p-3 rounded-lg shadow-lg border border-border/20">
                <div className="text-center">
                  <h4 className="font-semibold text-primary">Tanisha Bhatt</h4>
                  <p className="text-sm text-muted">Backend Developer</p>
                  <p className="text-xs mt-1">AKG Eng. College</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p>
                As a backend developer, I specialize in building robust and scalable server-side applications. My expertise lies in Node.js, MongoDB, and crafting secure APIs that power seamless user experiences.
              </p>
              <p>
                With a deep understanding of authentication, database design, and system architecture, I ensure smooth data flow and high performance. I love solving complex logic and turning ideas into reliable backend systems.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter 
                      value={stat.value} 
                      inView={inView} 
                    />
                    +
                  </div>
                  <p className="text-sm text-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted">{skill.percentage}%</span>
                  </div>
                  <SkillBar percentage={skill.percentage} delay={index * 0.1} inView={inView} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
