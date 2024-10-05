'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 6));
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
    const moreProjects = projects.slice(currentLength, currentLength + 3);
    if (moreProjects.length > 0) {
      setVisibleProjects([...visibleProjects, ...moreProjects]);
    }
    if (currentLength + moreProjects.length >= projects.length) {
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
