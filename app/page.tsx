"use client";

import { Snowfall } from 'react-snowfall';
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { motion, easeOut } from 'framer-motion';

export default function UnderConstruction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-center text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Falling Snow Effect */}
      <Snowfall
        snowflakeCount={250}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        color="white"
      />

      <motion.div className="p-6" variants={itemVariants}>
        <div className="relative">
          <div className="absolute top-6 right-6 translate-x-1/2 -translate-y-1/2 transform rotate-12 z-0 drop-shadow-2xl">
            <img
              src="/santa-hat.png"
              alt="Santa Hat"
              width="200"
              height="200"
            />
          </div>
          <div className="relative bg-white p-6 rounded-full border-4 border-gray-700 shadow-2xl z-10">
            <img
              src="/logo.svg"
              alt="Marcgraphix Studio Logo"
              width="220"
              height="220"
              className="rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mt-8 text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.8)] font-baloo relative"
        variants={itemVariants}
      >
        {"Marcgraphix Studio".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 5px rgba(255, 215, 0, 0.5)", // Lumière douce dorée
                "0 0 10px rgba(255, 215, 0, 0.3)", // Lumière encore plus douce
                "0 0 5px rgba(255, 215, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1, // Décalage pour chaque lettre
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mt-6 text-xl text-gray-300 max-w-3xl"
        variants={itemVariants}
      >
        Nous préparons quelque chose d'incroyable pour vous. Restez connectés et revenez bientôt pour découvrir notre univers unique !
      </motion.p>

      <motion.div className="mt-10 space-y-6" variants={itemVariants}>
        <div className="flex items-center justify-center space-x-4">
          <FaEnvelope size={30} className="text-sky-400" />
          <a href="mailto:team@marcgraphix.com" className="text-gray-300 text-lg hover:text-sky-400">
            team@marcgraphix.com
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <FaMobileAlt size={30} className="text-sky-400" />
          <a href="tel:+32490616350" className="text-gray-300 text-lg hover:text-sky-400">
            +32 490 61 63 50
          </a>
        </div>
      </motion.div>

      <motion.footer
        className="mt-16 text-sm text-gray-500"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} MarcGraphix Studio. Tous droits réservés.
      </motion.footer>
    </motion.div>
  );
}