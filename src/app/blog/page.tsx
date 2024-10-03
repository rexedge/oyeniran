'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Search, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 13',
    excerpt:
      'Learn how to build modern web applications with Next.js 13 and its powerful features.',
    date: '2023-05-15',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'JavaScript'],
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'The Power of TypeScript in Large-Scale Applications',
    excerpt:
      'Discover how TypeScript can improve your development workflow and reduce bugs in large projects.',
    date: '2023-05-10',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Software Engineering'],
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Optimizing React Performance: Tips and Tricks',
    excerpt:
      'Learn advanced techniques to boost the performance of your React applications.',
    date: '2023-05-05',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Optimization'],
    image: '/placeholder.svg',
  },
];

const categories = [
  'Web Development',
  'Programming',
  'Software Engineering',
  'DevOps',
  'AI & Machine Learning',
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || post.category === selectedCategory),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Insights & Innovations in Tech
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mt-4 space-x-2">
                    <Badge>{post.category}</Badge>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                  <Button asChild>
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? 'default' : 'outline'
                    }
                    className="w-full justify-start"
                    onClick={() =>
                      setSelectedCategory(
                        category === selectedCategory ? '' : category,
                      )
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscribe</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-2">
                <Input type="email" placeholder="Your email address" />
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" /> Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around">
                <Button size="icon" variant="outline" asChild>
                  <Link href="https://github.com/yourusername">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <Link href="https://linkedin.com/in/yourusername">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <Link href="https://twitter.com/yourusername">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
