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
import { blogPosts } from '@/lib/blogPosts';
import { blogCategories, siteConfig } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Search, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 5));
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
    const morePosts = blogPosts.slice(currentLength, currentLength + 3);
    if (morePosts.length > 0) {
      setVisiblePosts([...visiblePosts, ...morePosts]);
    }
    if (currentLength + morePosts.length >= blogPosts.length) {
      setHasMore(false);
    }
  };

  const filterPosts = () => {
    let filteredPosts = blogPosts;
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
                {blogCategories.map((category) => (
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
                  <Link href={siteConfig.links.github}>
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <Link href={siteConfig.links.linkedin}>
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                  <Link href={siteConfig.links.twitter}>
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
