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
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Search, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const allBlogPosts = [
  {
    id: 1,
    title:
      'Getting Started with Next.js 13: A Comprehensive Guide for Modern Web Development',
    excerpt:
      'Learn how to build modern web applications with Next.js 13 and its powerful features.',
    date: '2023-05-15',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'JavaScript', 'Frontend', 'SSR'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 2,
    title:
      'The Power of TypeScript in Large-Scale Applications: Boosting Productivity and Reducing Errors',
    excerpt:
      'Discover how TypeScript can improve your development workflow and reduce bugs in large projects.',
    date: '2023-05-10',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Software Engineering', 'Static Typing'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 3,
    title:
      'Optimizing React Performance: Advanced Techniques for Faster and Smoother User Experiences',
    excerpt:
      'Learn advanced techniques to boost the performance of your React applications.',
    date: '2023-05-05',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript', 'Frontend'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 4,
    title: 'Mastering CSS Grid: Building Complex Layouts with Ease',
    excerpt:
      'Explore the power of CSS Grid and learn how to create intricate layouts effortlessly.',
    date: '2023-04-30',
    category: 'Web Development',
    tags: ['CSS', 'Layout', 'Frontend', 'Design'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 5,
    title: 'Introduction to GraphQL: Revolutionizing API Development',
    excerpt:
      'Discover how GraphQL is changing the way we build and consume APIs.',
    date: '2023-04-25',
    category: 'Programming',
    tags: ['GraphQL', 'API', 'Backend', 'JavaScript'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 6,
    title:
      'Serverless Architecture: Building Scalable Applications in the Cloud',
    excerpt:
      'Learn how serverless architecture can simplify your development process and reduce costs.',
    date: '2023-04-20',
    category: 'DevOps',
    tags: ['Serverless', 'Cloud', 'AWS', 'Azure', 'Google Cloud'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 7,
    title:
      'Machine Learning for Web Developers: Integrating AI into Your Applications',
    excerpt:
      'Explore how web developers can leverage machine learning to create intelligent web applications.',
    date: '2023-04-15',
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'AI', 'TensorFlow.js', 'Web Development'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 8,
    title:
      'Accessibility in Web Design: Creating Inclusive Digital Experiences',
    excerpt:
      'Learn best practices for making your web applications accessible to all users.',
    date: '2023-04-10',
    category: 'Web Development',
    tags: ['Accessibility', 'UX', 'HTML', 'ARIA', 'Web Standards'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 9,
    title:
      'Microservices Architecture: Breaking Down Monoliths for Scalability',
    excerpt:
      'Understand the benefits and challenges of adopting a microservices architecture.',
    date: '2023-04-05',
    category: 'Software Engineering',
    tags: ['Microservices', 'Architecture', 'Scalability', 'DevOps'],
    image: 'https://placebear.com/g/400/200',
  },
  {
    id: 10,
    title: 'State Management in React: Comparing Redux, MobX, and Recoil',
    excerpt:
      'Explore different state management solutions for React applications and their use cases.',
    date: '2023-03-31',
    category: 'Web Development',
    tags: ['React', 'State Management', 'Redux', 'MobX', 'Recoil'],
    image: 'https://placebear.com/g/400/200',
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
  const [visiblePosts, setVisiblePosts] = useState(allBlogPosts.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts();
    }
  }, [inView, hasMore]);

  useEffect(() => {
    filterPosts();
  }, [searchTerm, selectedCategory]);

  const loadMorePosts = () => {
    const currentLength = visiblePosts.length;
    const morePosts = allBlogPosts.slice(currentLength, currentLength + 3);
    if (morePosts.length > 0) {
      setVisiblePosts([...visiblePosts, ...morePosts]);
    }
    if (currentLength + morePosts.length >= allBlogPosts.length) {
      setHasMore(false);
    }
  };

  const filterPosts = () => {
    let filteredPosts = allBlogPosts;
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === selectedCategory,
      );
    }
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }
    setVisiblePosts(filteredPosts.slice(0, 5));
    setHasMore(filteredPosts.length > 5);
  };

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
            <AnimatePresence>
              {visiblePosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
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
                      <CardTitle
                        className="line-clamp-1 mb-2"
                        title={post.title}
                      >
                        {post.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {hasMore && (
            <div ref={ref} className="flex justify-center mt-8">
              <Button onClick={loadMorePosts} variant="outline">
                Load More
              </Button>
            </div>
          )}
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
