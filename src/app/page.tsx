'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
    <div className="container mx-auto px-4 py-8">
      <motion.section
        id="intro"
        className="text-center mb-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          variants={fadeInUp as IVARIANT}
        >
          {siteConfig.name}
        </motion.h1>
        <motion.h2
          className="text-2xl text-muted-foreground mb-4"
          variants={fadeInUp as IVARIANT}
        >
          Full-stack Software Engineer
        </motion.h2>
        <motion.p className="text-xl mb-8" variants={fadeInUp as IVARIANT}>
          Crafting elegant solutions to complex problems
        </motion.p>
        <motion.div variants={fadeInUp as IVARIANT}>
          <Button asChild>
            <Link href="/resume.pdf" download>
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeInUp as IVARIANT}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-48 h-48 relative"
            variants={fadeInUp as IVARIANT}
          >
            <Image
              src={siteConfig.ogImage}
              alt={siteConfig.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <motion.p className="text-lg flex-1" variants={fadeInUp as IVARIANT}>
            A passionate software engineer with 5+ years of experience in
            building web applications. I specialize in React, Node.js, and cloud
            technologies. When I'm not coding, you can find me hiking or reading
            about the latest tech trends.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        id="featured-projects"
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeInUp as IVARIANT}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
        >
          {[1, 2, 3].map((project) => (
            <motion.div key={project} variants={fadeInUp as IVARIANT}>
              <Card>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A brief description of the project and the technologies
                    used.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="#">Demo</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">GitHub</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-8"
          variants={fadeInUp as IVARIANT}
        >
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeInUp as IVARIANT}
        >
          Get in Touch
        </motion.h2>
        <motion.p className="mb-4" variants={fadeInUp as IVARIANT}>
          I'm always open to new opportunities and collaborations.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          variants={fadeInUp as IVARIANT}
        >
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/yourusername">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/yourusername">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://twitter.com/yourusername">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
