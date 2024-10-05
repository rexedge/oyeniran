'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const animations = [
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  },
  {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  },
  {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  },
  {
    initial: { scale: 0, borderRadius: '50%' },
    animate: { scale: 1, borderRadius: '0%' },
    exit: { scale: 0, borderRadius: '50%' },
  },
];

const transitions = [
  {
    duration: 0.5,
    ease: 'easeInOut',
  },
  {
    duration: 0.7,
    ease: 'anticipate',
  },
  {
    duration: 0.6,
    ease: 'backInOut',
  },
  {
    type: 'spring',
    stiffness: 100,
    damping: 10,
  },
  {
    type: 'spring',
    stiffness: 200,
    damping: 15,
  },
];

export default function RandomPageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animation, setAnimation] = useState(animations[0]);
  const [transition, setTransition] = useState(transitions[0]);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    const randomTransition =
      transitions[Math.floor(Math.random() * transitions.length)];
    setAnimation(randomAnimation);
    setTransition(randomTransition);
  }, [pathname]);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        variants={animation}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
