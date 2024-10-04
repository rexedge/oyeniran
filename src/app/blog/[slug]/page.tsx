'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  ThumbsUp,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for the blog post
const blogPost = {
  id: 1,
  title: 'The Future of Web Development: Trends to Watch in 2023',
  content: `
    <p>As we move further into 2023, the world of web development continues to evolve at a rapid pace. New technologies, frameworks, and methodologies are emerging, reshaping the way we build and interact with web applications. In this post, we'll explore some of the most exciting trends that are set to define the future of web development.</p>

    <h2>1. Progressive Web Apps (PWAs)</h2>
    <p>Progressive Web Apps continue to gain traction, offering a seamless, app-like experience within web browsers. With improved offline capabilities, push notifications, and faster load times, PWAs are bridging the gap between web and native applications.</p>

    <h2>2. AI and Machine Learning Integration</h2>
    <p>Artificial Intelligence and Machine Learning are no longer just buzzwords. We're seeing increased integration of AI-powered features in web applications, from chatbots and voice interfaces to personalized content recommendations and predictive analytics.</p>

    <h2>3. WebAssembly (Wasm)</h2>
    <p>WebAssembly is enabling high-performance computing in web browsers, allowing developers to run complex applications at near-native speed. This opens up new possibilities for web-based gaming, video editing, and other computationally intensive tasks.</p>

    <h2>4. Serverless Architecture</h2>
    <p>Serverless computing is simplifying backend development and deployment. By abstracting away server management, developers can focus more on writing code and less on infrastructure concerns.</p>

    <h2>Conclusion</h2>
    <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and embracing new technologies, we can create more powerful, efficient, and user-friendly web applications. What trends are you most excited about? Share your thoughts in the comments below!</p>
  `,
  author: {
    name: 'Jane Doe',
    avatar: 'https://placebear.com/g/600/400',
    bio: 'Jane is a senior web developer with over 10 years of experience in building scalable web applications.',
  },
  publishedAt: '2023-05-15T10:00:00Z',
  readTime: 5,
  likes: 127,
  comments: 23,
  shares: 45,
  tags: ['Web Development', 'Technology Trends', 'JavaScript'],
};

// Mock data for recent and popular posts
const recentPosts = [
  {
    id: 2,
    title: '10 Essential VS Code Extensions for Web Developers',
    date: '2023-05-10',
  },
  { id: 3, title: 'Understanding the Basics of GraphQL', date: '2023-05-05' },
  {
    id: 4,
    title: 'How to Optimize Your React Application for Performance',
    date: '2023-04-30',
  },
];

const popularPosts = [
  { id: 5, title: 'A Comprehensive Guide to CSS Grid', likes: 256 },
  { id: 6, title: 'JavaScript ES6: The Complete Guide', likes: 198 },
  {
    id: 7,
    title: 'Building RESTful APIs with Node.js and Express',
    likes: 172,
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents SSR issues with useParams
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <Avatar>
              <AvatarImage
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
              />
              <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{blogPost.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {format(new Date(blogPost.publishedAt), 'MMMM d, yyyy')}
                <Separator className="mx-2" orientation="vertical" />
                <Clock className="mr-1 h-4 w-4" />
                {blogPost.readTime} min read
              </div>
            </div>
          </div>
          <Image
            src="https://placebear.com/g/600/400"
            alt={blogPost.title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full mb-6"
          />
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          <div className="flex items-center space-x-4 mt-8">
            <Button variant="outline">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {blogPost.likes} Likes
            </Button>
            <Button variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              {blogPost.comments} Comments
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              {blogPost.shares} Shares
            </Button>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm font-semibold">Share this post:</span>
            <Button size="icon" variant="outline">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                  />
                  <AvatarFallback>
                    {blogPost.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{blogPost.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {blogPost.author.bio}
                  </p>
                </div>
              </div>
              <Button className="w-full">Follow</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {popularPosts.map((post) => (
                  <li
                    key={post.id}
                    className="flex justify-between items-center"
                  >
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                    <Badge variant="secondary">
                      <ThumbsUp className="mr-1 h-3 w-3" />
                      {post.likes}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archive</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  'May 2023',
                  'April 2023',
                  'March 2023',
                  'February 2023',
                  'January 2023',
                ].map((month) => (
                  <li key={month}>
                    <Link
                      href={`/blog/archive/${month
                        .toLowerCase()
                        .replace(' ', '-')}`}
                      className="hover:underline"
                    >
                      {month}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Stay updated with our latest posts and tech insights!
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <Button className="w-full">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
