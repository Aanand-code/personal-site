import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0.8, y: 50 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.3,
          delay: 0.15,
        }}
        whileHover={{
          scale: 1.02,
          opacity: 1,
        }}
        whileTap={{
          scale: 1.02,
          opacity: 1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
