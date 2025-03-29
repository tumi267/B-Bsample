'use client'
import React, { useState } from 'react';
import styles from './CallToAction.module.css';
import Bookingmodel from '../Bookingmodel/Bookingmodel';

function CalltoAction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setIsOpen(true)}>
        Book with us today
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Bookingmodel />
          </div>
        </div>
      )}
    </>
  );
}

export default CalltoAction;

