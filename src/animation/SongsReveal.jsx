import { motion } from 'motion/react';

const SongsReveal = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 1,
              ease: 'easeOut',
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SongsReveal;
