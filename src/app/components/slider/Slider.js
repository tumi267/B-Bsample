"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./slider.module.css";

const images = [
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YiUyNmJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzYWJsaXR5JTIwZXZlbnRzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661774316407-56209baefa8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjdGl2aXRlc3xlbnwwfHwwfHx8MA%3D%3D",
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  useEffect(() => {
    const interval = setInterval(() => nextSlide(1), 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt="slide"
          className={styles.sliderImage}
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <button onClick={() => nextSlide(-1)} className={styles.prevButton}>
       
      </button>
      <button onClick={() => nextSlide(1)} className={styles.nextButton}>
        
      </button>

      <div className={styles.dotsContainer}>
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.activeDot : styles.dot}
            onClick={() => nextSlide(i - index)}
          />
        ))}
      </div>
    </div>
  );
}
