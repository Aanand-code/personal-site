import { motion } from 'framer-motion';
import one from '../assets/images/one.jpg';
import three from '../assets/images/three.jpg';
import eight from '../assets/images/eight.jpg';
import two from '../assets/images/two.jpg';

const photoCards = [
  {
    id: 1,
    image: one,
    date: 'March 2025',
    place: 'Gulmarg, Kashmir',
    rotation: 'rotate-350 z-5',
  },
  {
    id: 2,
    image: three,
    date: 'August 2023',
    place: 'Sukhna Lake, Chandigarh',
    rotation: 'rotate-6 z-4',
  },
  {
    id: 3,
    image: two,
    date: 'December 2024',
    place: 'Chansal Pass, Rohru',
    rotation: 'rotate-355 z-3',
  },
  {
    id: 4,
    image: eight,
    date: 'January 2024',
    place: 'Ridge, Shimla',
    rotation: 'rotate-5 lg:rotate-12 ',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -400,
    y: 200,
    scale: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
};

const PhotoCards = () => {
  return (
    <section className="relative py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {photoCards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{
              rotateY: 180,
              scale: 1.04,
              transition: {
                type: 'spring',
              },
            }}
            whileTap={{
              rotateY: 180,
              scale: 0.98,
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transformOrigin: '50% 50%',
            }}
            className={`relative h-45 w-45 lg:h-60 lg:w-60 cursor-pointer ${card.rotation}`}
          >
            {/* Front Face (Image) */}
            <motion.div
              style={{
                backfaceVisibility: 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%',
                transformOrigin: '50% 50%',
              }}
              className="rounded-lg overflow-hidden shadow-xl/60 shadow-stone-900/100"
            >
              <img
                src={card.image}
                className="w-full h-full object-cover"
                alt={`Card ${card.id}`}
              />
            </motion.div>

            {/* Back Face */}
            <motion.div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                transformOrigin: '50% 50%',
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              className=" rounded-lg flex flex-col items-center justify-center border-1 border-emerald-50 bg-stone-900 "
            >
              <p className="pb-3 font-light text-sm text-blue-100 select-none">
                {card.date}
              </p>
              <p className="font-light text-xs text-blue-100 select-none touch-none">
                {card.place}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PhotoCards;
