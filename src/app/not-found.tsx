'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Loader2, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const glitchAnimation = {
  hidden: {
    skew: 0,
    opacity: 1,
    textShadow: 'none',
  },
  visible: {
    skew: [0, -5, 5, 0],
    opacity: [1, 0.8, 0.9, 1],
    textShadow: [
      'none',
      '2px 2px hsl(var(--primary)), -2px -2px hsl(var(--secondary))',
      'none',
    ],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const aiMessages = [
  'Analyzing quantum fluctuations in the space-time continuum...',
  'Recalibrating the flux capacitor...',
  'Consulting with the digital oracle...',
  'Realigning the cosmic web pathways...',
  'Debugging the matrix...',
  'Reticulating splines...',
  'Hacking the mainframe...',
  'Overclocking the AI neural networks...',
];

export default function NotFound() {
  const [isFixing, setIsFixing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isFixing) {
      const interval = setInterval(() => {
        setMessage(aiMessages[Math.floor(Math.random() * aiMessages.length)]);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isFixing]);

  const handleFix = () => {
    setIsFixing(true);
    setTimeout(() => {
      setIsFixing(false);
      setMessage("Sorry, even our AI couldn't fix this one!");
    }, 10000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <motion.h1
        className="text-6xl font-bold mb-4"
        variants={glitchAnimation as IVARIANT}
        initial="hidden"
        animate="visible"
      >
        404
      </motion.h1>
      <h2 className="text-2xl mb-8">Oops! Page not found</h2>

      <motion.div
        className="w-64 h-64 bg-muted rounded-full flex items-center justify-center mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="w-56 h-56 bg-secondary rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-48 h-48 bg-primary rounded-full flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            {isFixing ? (
              <Loader2 className="w-24 h-24 text-primary-foreground animate-spin" />
            ) : (
              <RefreshCw className="w-24 h-24 text-primary-foreground" />
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-lg mb-4 text-center"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex space-x-4">
        <Button onClick={handleFix} disabled={isFixing} variant="secondary">
          {isFixing ? 'AI is fixing...' : 'Let AI fix it!'}
        </Button>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
