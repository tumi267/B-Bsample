"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import nextimg from "public/next.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import Bookingmodel from "../Bookingmodel/Bookingmodel";

function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleModal = () => setShowModal(!showModal);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.div
      className={styles.nav_contain}
      initial={{ opacity: 0 }}
      animate={{ opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className={styles.nav_img}>
      <Link className={styles.links} href={"/"}> <Image src={nextimg} alt="logo" width={50} height={50} loading="lazy" /></Link>
      </span>

      {/* Mobile Toggle Button */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation List */}
      <ul className={`${styles.list} ${menuOpen ? styles.active : ""}`}>
        <li><Link className={styles.links} href={"/"}>Home</Link></li>
        <li><Link className={styles.links} href={"/accommodation"}>Accommodation</Link></li>
        <li><Link className={styles.links} href={"/dinning"}>Dining</Link></li>
        <li><Link className={styles.links} href={"/todo"}>To-Do</Link></li>
        <li><Link className={styles.links} href={"/contact"}>Contact</Link></li>
        <li><button className={styles.links_btn} onClick={toggleModal}>Booking</button></li>
      </ul>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Bookingmodel />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Nav;

