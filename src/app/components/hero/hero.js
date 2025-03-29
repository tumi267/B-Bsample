import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
function Hero({url}) {
  return (
    <section>
        <div className={styles.hero_image}>
        <Image src={url}
        fill={true}
        objectFit="fill" />
        </div>
    </section>
  )
}

export default Hero