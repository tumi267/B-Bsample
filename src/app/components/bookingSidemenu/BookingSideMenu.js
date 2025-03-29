"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from './BookingSideMenu.module.css';

export default function BookingSideMenu() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [availability, setAvailability] = useState(true); // Assume available by default
  const [rate, setRate] = useState(100); // Default rate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleCheckAvailability = () => {
    // Example: Check if the check-in date is before the check-out date
    if (checkIn && checkOut) {
      if (new Date(checkIn) >= new Date(checkOut)) {
        setAvailability(false);
      } else {
        setAvailability(true);
      }
    }
  };

  const handleRateCalculation = () => {
    // Example: Calculate rates based on the stay duration
    if (checkIn && checkOut) {
      const duration = (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24); // Convert to days
      setRate(100 * duration); // Assume a flat rate of 100 per day
    }
  };

  const handleCheckAvailabilityClick = () => {
    handleCheckAvailability();
    handleRateCalculation();
    setIsModalOpen(true);
  };

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.stripContainer}>
        <label className={styles.label}>Check-In:</label>
        <input
          type="date"
          className={styles.input}
          value={checkIn || ""}
          onChange={(e) => setCheckIn(e.target.value)}
        />

        <label className={styles.label}>Check-Out:</label>
        <input
          type="date"
          className={styles.input}
          value={checkOut || ""}
          onChange={(e) => setCheckOut(e.target.value)}
        />

        <button
          className={styles.checkAvailabilityButton}
          onClick={handleCheckAvailabilityClick}
          disabled={!checkIn || !checkOut}
        >
          Check Availability
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.modalContent}>
            <h3>Booking Summary</h3>
            <p>Check-In: {new Date(bookingDetails?.checkIn).toLocaleDateString()}</p>
            <p>Check-Out: {new Date(bookingDetails?.checkOut).toLocaleDateString()}</p>
            <p>Total Rate: ${bookingDetails?.rate}</p>
            <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>
              Close
            </button>
          </div>
        </motion.div>
      )}
      <h3>Details</h3>
  <ul>
    <li><strong>Sleeps:</strong> 2</li>
    <li><strong>Number of Units:</strong> 10</li>
    <li><strong>Size:</strong> 50 m²</li>
  </ul>
  
  <h3>Amenities</h3>
  <ul>
    <li>Wifi</li>
    <li>TV</li>
    <li>Coffee and Tea</li>
    <li>Security Safe</li>
    <li>Ceiling fan</li>
  </ul>
    </div>
  );
}
