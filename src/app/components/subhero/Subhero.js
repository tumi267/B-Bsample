import React from 'react'
import styles from './Subhero.module.css'
import Image from 'next/image'

function Subhero({url}) {
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

export default Subhero