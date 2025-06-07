import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  percentage: number;
  delay?: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ percentage, delay = 0, inView }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [percentage, delay, inView]);

  return (
    <div className="skill-bar">
      <div 
        className="skill-progress" 
        style={{ 
          width: `${width}%`,
          transition: `width 1s ease-in-out ${delay}s`
        }}
      />
    </div>
  );
};

export default SkillBar;