'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const allProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, Stripe, and a headless CMS.',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Prisma'],
    demoLink: 'https://ecommerce-demo.yourdomain.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates using WebSockets.',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    demoLink: 'https://taskmanager.yourdomain.com',
    githubLink: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that provides real-time weather data and forecasts.',
    technologies: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js'],
    demoLink: 'https://weather.yourdomain.com',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    id: 4,
    title: 'Personal Finance Tracker',
    description:
      'A web application to help users manage their personal finances and track expenses.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'D3.js'],
    demoLink: 'https://finance-tracker.yourdomain.com',
    githubLink: 'https://github.com/yourusername/finance-tracker',
  },
  {
    id: 5,
    title: 'Social Media Analytics Tool',
    description:
      'A tool for businesses to track and analyze their social media performance across platforms.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Twitter API',
      'Facebook API',
    ],
    demoLink: 'https://social-analytics.yourdomain.com',
    githubLink: 'https://github.com/yourusername/social-analytics',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description:
      'A mobile-first web app for tracking workouts and monitoring fitness progress.',
    technologies: [
      'React Native',
      'Expo',
      'GraphQL',
      'Apollo Client',
      'Node.js',
    ],
    demoLink: 'https://fitness-app.yourdomain.com',
    githubLink: 'https://github.com/yourusername/fitness-app',
  },
  {
    id: 7,
    title: 'AI-powered Chatbot',
    description:
      'An intelligent chatbot built with natural language processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
    demoLink: 'https://chatbot.yourdomain.com',
    githubLink: 'https://github.com/yourusername/ai-chatbot',
  },
  {
    id: 8,
    title: 'Blockchain Voting System',
    description:
      'A secure and transparent voting system built on blockchain technology.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
    demoLink: 'https://blockchain-voting.yourdomain.com',
    githubLink: 'https://github.com/yourusername/blockchain-voting',
  },
  {
    id: 9,
    title: 'Augmented Reality Art Gallery',
    description:
      'An AR app that transforms any space into a virtual art gallery.',
    technologies: ['Unity', 'ARKit', 'ARCore', 'C#', 'React Native'],
    demoLink: 'https://ar-gallery.yourdomain.com',
    githubLink: 'https://github.com/yourusername/ar-art-gallery',
  },
  {
    id: 10,
    title: 'IoT Home Automation System',
    description:
      'A smart home system that connects and controls various IoT devices.',
    technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React', 'Node.js'],
    demoLink: 'https://smart-home.yourdomain.com',
    githubLink: 'https://github.com/yourusername/iot-home-automation',
  },
];

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(
    allProjects.slice(0, 6),
  );
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreProjects();
    }
  }, [inView, hasMore]);

  const loadMoreProjects = () => {
    const currentLength = visibleProjects.length;
    const moreProjects = allProjects.slice(currentLength, currentLength + 3);
    if (moreProjects.length > 0) {
      setVisibleProjects([...visibleProjects, ...moreProjects]);
    }
    if (currentLength + moreProjects.length >= allProjects.length) {
      setHasMore(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeInUp as IVARIANT}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerChildren}
      >
        {visibleProjects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp as IVARIANT}>
            <Card className="flex flex-col h-full">
              <CardContent className="flex-grow p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6">
                <Button asChild variant="outline">
                  <Link href={project.demoLink}>Live Demo</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.githubLink}>GitHub</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {hasMore && (
        <div ref={ref} className="flex justify-center mt-8">
          <Button onClick={loadMoreProjects} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </motion.div>
  );
}
