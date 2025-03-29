import Image from 'next/image'
import React from 'react'
import styles from './nav.module.css'
import nextimg from'public/next.svg'
import Link from 'next/link'
function Nav() {
  return (
    <div className={styles.nav_contain}>
        <span className={styles.nav_img}><Image src={nextimg} alt='logo' width={80} height={80} loading="lazy"/></span>
        <ul className={styles.list}>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/accommodation'}>accommodation</Link></li>
            <li><Link href={'/dinning'}>dinning</Link></li>
            {/* <li><Link href={'/location'}>location</Link></li> */}
            <li><Link href={'/todo'}>todo</Link></li>
            {/* <li><Link href={'/gallery'}>gallery</Link></li> */}
            {/* <li><Link href={'/reviews'}>reviews</Link></li> */}
            {/* <li><Link href={'/offers'}>offers</Link></li> */}
            <li><Link href={'/contact'}>contact</Link></li>
            {/* maybe module */}
            <li><Link href={'/booking'}>booking</Link></li>
        </ul>
    </div>
  )
}

export default Nav