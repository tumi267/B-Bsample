'use client'
import Hero from '@/app/components/hero/hero'
import React from 'react'

import styles from './todo.module.css'
import BentoActivities from '../components/bento/BentoActivities'

function page() {
  return (
<div className={styles.contain}>
  <h2 className={styles.special_item}>Things to Do</h2>

  <Hero
    url='https://images.unsplash.com/photo-1593739742226-5e5e2fdb1f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWN0aXZpdGllc3xlbnwwfHwwfHx8MA%3D%3D'
  />
  
  <h3>Explore the best attractions and experiences in our area. Whether you&apos;re a culture enthusiast, adventure seeker, or someone looking to relax, we have something for everyone.</h3>
  
  <h3>
    From breathtaking museum exhibits to exciting outdoor tours, we offer a variety of activities to make your stay unforgettable. Enjoy exploring the city&apos;s rich heritage, indulge in nature walks, or immerse yourself in the local arts scene.
  </h3>

  <BentoActivities />

  <h2 className={styles.special_item}>Our Top Activities</h2>
  
  <div>
    <h3 className={styles.special_item}>Guided City Tour</h3>
    <p>Embark on a scenic city tour with a knowledgeable guide who will take you through historic sites, landmarks, and hidden gems, giving you an insight into the area&apos;s rich culture.</p>
  </div>
  
  <div>
    <h3 className={styles.special_item}>Art Gallery Walk</h3>
    <p>Discover local and international art in one of our renowned galleries. Enjoy a relaxing walk through stunning exhibits, sculptures, and installations curated by talented artists.</p>
  </div>
  
  <div>
    <h3 className={styles.special_item}>Museum Exploration</h3>
    <p>Immerse yourself in history at one of our top museums. Whether it&apos;s ancient artifacts or modern exhibits, there&apos;s something to spark your curiosity and creativity.</p>
  </div>
  
  <div>
    <h3 className={styles.special_item}>Nature Hike &amp; Picnic</h3>
    <p>Take in the beauty of nature on a guided hike through lush trails. End the day with a relaxing picnic in a picturesque location, surrounded by breathtaking views.</p>
  </div>
</div>


  )
}

export default page
