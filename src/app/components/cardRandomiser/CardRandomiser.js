"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from './CardRandomiser.module.css';
import Link from "next/link";

const cardData = [
  { title: "Accommodation", content: "Find the best places to stay." },
  { title: "Dining", content: "Explore amazing dining options." },
  { title: "Location", content: "Discover beautiful locations." },
  { title: "To-Do", content: "Things to do during your visit." },
  { title: "Offers", content: "Check out exclusive offers." },
  // Add more items if needed
];

export default function CardRandomiser() {
  const [currentCards, setCurrentCards] = useState([0, 1, 2, 3]); // Indexes of the cards to display
  const [nextIndex, setNextIndex] = useState(4); // Track the next card to show

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 4); // Pick a random index in the grid (0, 1, 2, 3)

      // Ensure the card to be added is not already displayed in the grid
      let newCardIndex = nextIndex;
      while (currentCards.includes(newCardIndex)) {
        newCardIndex = (newCardIndex + 1) % cardData.length; // Get the next index, wrapping around
      }

      // Replace the card at the random index with the next valid card
      setCurrentCards((prev) => {
        const updatedCards = [...prev];
        updatedCards[randomIndex] = newCardIndex; // Replace the card at randomIndex
        return updatedCards;
      });

      // Move to the next card index, wrapping around when necessary
      setNextIndex((prev) => (prev + 1) % cardData.length); // Loop back to the beginning of the array
    }, 4000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [nextIndex, currentCards]);

  return (
    <div className={styles.gridContainer}>
      {currentCards.map((cardIndex, index) => (
        <motion.div
          key={cardIndex}
          className={styles.card}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          style={{
            gridColumnStart: `${(index % 2) + 1}`, // Random column in 2-column grid
            gridRowStart: `${Math.floor(index / 2) + 1}`, // Random row in 2-row grid
          }}
        >
          <Link href={`/${cardData[cardIndex].title.toLowerCase()}`} className={styles.cardLink}>
            <h3>{cardData[cardIndex].title}</h3>
            <p>{cardData[cardIndex].content}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
