'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience');

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      period: '2020 - Present',
      description:
        'Leading development of cutting-edge web applications using React and Node.js.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2017 - 2020',
      description:
        'Developed and maintained various client projects using MERN stack.',
    },
  ];

  const education = [
    {
      degree: 'M.S. in Computer Science',
      school: 'Tech University',
      year: '2017',
    },
    {
      degree: 'B.S. in Software Engineering',
      school: 'State College',
      year: '2015',
    },
  ];

  const awards = [
    {
      title: 'Innovation Award',
      organization: 'Tech Innovators Inc.',
      year: '2022',
    },
    {
      title: 'Best Web Application',
      organization: 'WebDev Conference',
      year: '2019',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Hello, I'm Your Name</h2>
          <p className="text-lg mb-4">
            I'm a passionate Full-stack Software Engineer with over 5 years of
            experience in crafting elegant solutions to complex problems. My
            journey in tech has been driven by curiosity and a constant desire
            to learn and innovate.
          </p>
          <p className="text-lg mb-4">
            When I'm not coding, you can find me hiking in the great outdoors,
            reading about the latest tech trends, or experimenting with new
            recipes in the kitchen. I believe in the power of technology to make
            the world a better place, and I'm always excited to take on new
            challenges that push the boundaries of what's possible.
          </p>
          <Button>Download Resume</Button>
        </motion.div>
      </div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="w-full" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="experience"
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="awards" onClick={() => setActiveTab('awards')}>
              <Award className="mr-2 h-4 w-4" />
              Awards
            </TabsTrigger>
            <TabsTrigger
              value="interests"
              onClick={() => setActiveTab('interests')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Interests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <Card>
              <CardContent className="space-y-4 mt-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} | {exp.period}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardContent className="space-y-4 mt-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} | {edu.year}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="awards">
            <Card>
              <CardContent className="space-y-4 mt-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4">
                    <h3 className="font-semibold">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {award.organization} | {award.year}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="interests">
            <Card>
              <CardContent className="mt-4">
                <p>Beyond coding, I'm passionate about:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Hiking and outdoor adventures</li>
                  <li>Reading sci-fi and technology books</li>
                  <li>Experimenting with new cooking recipes</li>
                  <li>Contributing to open-source projects</li>
                  <li>Attending tech meetups and conferences</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
