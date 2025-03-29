"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './slider.module.css';

const images = [
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YiUyNmJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzYWJsaXR5JTIwZXZlbnRzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661774316407-56209baefa8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjdGl2aXRlc3xlbnwwfHwwfHx8MA%3D%3D",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence>
        <motion.div
          key={index}
          className={styles.sliderWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={images[index]}
            alt="slide"
            className={styles.sliderImage}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>

      <div className={styles.dotsContainer}>
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.activeDot : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
