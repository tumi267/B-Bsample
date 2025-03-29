"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from './RoomCard.module.css'

const roomData = [
  { id: 1, name: "Safari Suite", description: "Experience luxury in the heart of nature with panoramic views." },
  { id: 2, name: "Garden View Room", description: "Enjoy tranquil garden views with a cozy, peaceful atmosphere." },
  { id: 3, name: "Ocean Breeze Room", description: "Relax in a spacious room with breathtaking ocean views." },
  { id: 4, name: "Mountain Retreat Room", description: "A quiet retreat in the mountains with all the comforts you need." },
];

export default function RoomCards() {
  return (
    <div className={styles.cardContainer}>
      {roomData.map((room) => (
        <motion.div
          key={room.id}
          className={styles.card}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/room/${room.name}`} className={styles.cardLink}>
            <h3 className={styles.special_item}>{room.name}</h3>
            <p>{room.description}</p>
            <button className={styles.button}>View Room</button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
