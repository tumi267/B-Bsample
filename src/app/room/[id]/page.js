'use client'
import Hero from '@/app/components/hero/hero'
import React from 'react'
import { useParams } from 'next/navigation'
import BentoRoom from '@/app/components/bento/BentoRoom'
import styles from './room.module.css'
import BookingSideMenu from '@/app/components/bookingSidemenu/BookingSideMenu'
function page() {
  const param=useParams()
  const {id}=param
  const cleanname=id.replace(/%20/g, ' ');
  return (
    <div className={styles.contain}>
      <div>
      <h2 className={styles.special_item}>{cleanname}</h2>
    <Hero
    url='https://plus.unsplash.com/premium_photo-1684175656057-3934872b125a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHdvJTIwaW50ZXJjb25uZWN0ZWQlMjBiZWRyb29tcyUyMGZvciUyMHByaXZhY3klMjBhbmQlMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D'/>
    <h3>Escape to Luxury and Comfort Our {cleanname} Room offer a spacious and elegant environment, designed with your comfort in mind. Featuring contemporary décor, soft furnishings, and a calming color palette, this room ensures a restful retreat. With a king-sized bed, premium linens, and a private balcony, guests can enjoy panoramic views of the surrounding area. Perfect for couples or solo travelers looking to unwind in style, the Deluxe Room also includes modern amenities such as a flat-screen TV, high-speed Wi-Fi, and a fully equipped bathroom.
    </h3>
    <h3>Room Features:</h3>
    <ul>
      <li>Two interconnected bedrooms for privacy and space</li>
      <li>Spacious living area with sofa and seating</li>
      <li>Flat-screen TV & high-speed Wi-Fi</li>
      <li>Two en-suite bathrooms with luxury toiletries</li>
      <li>Dining table and kitchenette area</li>
    </ul>
    <BentoRoom/>
    </div>
    <div><BookingSideMenu/></div>
    </div>
  )
}

export default page