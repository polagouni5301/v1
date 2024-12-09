import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ isVisible, onComplete }) => {
  const [count, setCount] = React.useState(3);

  React.useEffect(() => {
    if (!isVisible) return;

    // Reset the countdown when the countdown is visible
    setCount(3);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          // Call onComplete after the countdown finishes
          onComplete(); 
          return 3; // Reset the countdown after completing
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount or state change
  }, [isVisible, onComplete]); // Dependencies to restart when visibility changes

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
          role="alert"
          aria-live="assertive"
        >
          <motion.div
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="text-9xl font-bold text-white"
          >
            {count}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
