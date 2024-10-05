'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/lib/blogPosts';
import { siteConfig } from '@/lib/constants';
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
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const recentPosts = blogPosts.slice(0, 3);
const popularPosts = blogPosts.slice(0, 3);

export default function BlogPostPage() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);

  const blogPost = blogPosts.find((blog) => blog.id === Number(slug));
  if (!blogPost) return notFound();
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
              <AvatarImage src={siteConfig.ogImage} alt={siteConfig.name} />
              <AvatarFallback>{siteConfig.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{siteConfig.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {format(new Date(blogPost.date), 'MMMM d, yyyy')}
                <Separator className="mx-2" orientation="vertical" />
                <Clock className="mr-1 h-4 w-4" />
                {blogPost.readingTime} min read
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
            className="prose prose-orange prose-lg max-w-none"
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
                  <AvatarImage src={siteConfig.ogImage} alt={siteConfig.name} />
                  <AvatarFallback>{siteConfig.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{siteConfig.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.description}
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
