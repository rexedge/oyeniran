'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
}

const getSkillDescription = (skill: string) => {
  const descriptions: { [key: string]: string } = {
    JavaScript:
      'Proficient in modern JavaScript, including ES6+ features and async programming.',
    TypeScript:
      'Experienced in using TypeScript for large-scale applications with complex type systems.',
    React:
      'Expert in building complex UIs with React, including hooks and context API.',
    'Node.js':
      'Skilled in server-side JavaScript, building RESTful APIs and microservices.',
    Python:
      'Competent in Python for data analysis, scripting, and backend development.',
    SQL: 'Experienced in designing and optimizing database schemas and complex queries.',
    GraphQL:
      'Proficient in designing and implementing GraphQL APIs for efficient data fetching.',
    Docker:
      'Familiar with containerization and orchestration for scalable deployments.',
  };
  return (
    descriptions[skill] || 'Skilled in various aspects of this technology.'
  );
};

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-primary">{skill}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="mt-2 text-sm text-muted-foreground"
      >
        {getSkillDescription(skill)}
      </motion.div>
    </div>
  );
}
