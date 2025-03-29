import React from 'react'
import styles from './ImageRight.module.css'
import Image from 'next/image'
import CalltoAction from '../callToAction/CalltoAction'
function ImageRight({msg,url}) {
  return (
    <section className={styles.contain}>
        <div>
        <p>{msg}</p>
        <CalltoAction/>
        </div>
        <div className={styles.image_contain}>
        <Image src={url} fill
          style={{
            objectFit: 'cover', 
          }}
          loading = 'lazy'
        />
        </div>
    </section>
  )
}

export default ImageRight