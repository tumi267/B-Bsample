import React from 'react'
import Hero from '../components/hero/hero'
import SubHeading from '../components/subheading/SubHeading'
import styles from './accommodation.module.css'
import RoomCards from '../components/roomCard/RoomCard'
function Accommodation() {
  return (
<div>
  <Hero
    url='https://images.unsplash.com/photo-1583171014676-7be1ee1c03de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsY29taW5nJTIwcmVzZXB0aW9ufGVufDB8fDB8fHww'
  />
  <SubHeading
    heading='Accommodation'
  />
  <div className={styles.contain_text}>
    <p>Experience the charm and warmth of Africa with a stay at our Bed &amp; Breakfast. Nestled in a serene and picturesque setting, our B&amp;B offers a comfortable, homely atmosphere where you can relax and unwind. Whether you&apos;re visiting for business or pleasure, we provide cozy rooms equipped with modern amenities and personalized service to make your stay memorable.</p>
  </div>
  <RoomCards/>
</div>
  )
}

export default Accommodation