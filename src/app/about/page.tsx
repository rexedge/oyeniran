'use client';

import { SkillBar } from '@/components/SkillBar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  awards,
  education,
  experiences,
  siteConfig,
  skills,
} from '@/lib/constants';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
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
            src={siteConfig.ogImage}
            alt={siteConfig.name}
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
          <h2 className="text-2xl font-semibold mb-4">
            Hello, I'm {siteConfig.name}
          </h2>
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

      <Card className="my-8">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>
            My technical expertise and proficiency levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar skill={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Tabs className="w-full" defaultValue="experience">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="experience" className="gap-2">
              <Briefcase className=" h-4 w-4" />
              <div className="hidden md:inline-block">Experience</div>
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className=" h-4 w-4" />
              <div className="hidden md:inline-block">Education</div>
            </TabsTrigger>
            <TabsTrigger value="awards" className="gap-2">
              <Award className=" h-4 w-4" />
              <div className="hidden md:inline-block">Awards</div>
            </TabsTrigger>
            <TabsTrigger value="interests" className="gap-2">
              <BookOpen className=" h-4 w-4" />
              <div className="hidden md:inline-block">Interests</div>
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
