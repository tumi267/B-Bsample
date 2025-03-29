import React from 'react'
import styles from './ImageLeft.module.css'
import Image from 'next/image'
import CalltoAction from '../callToAction/CalltoAction'
function ImageLeft({msg,url}) {
  return (
    <section className={styles.contain}>
        <div className={styles.image_contain}>
        <Image src={url} fill
          style={{
            objectFit: 'cover', 
          }}
          loading = 'lazy'
        />
        </div>
        <div>
        <p>{msg}</p>
        <div className={styles.callToAction}>
        <CalltoAction/>
        </div>
        </div>
        
    </section>
  )
}

export default ImageLeft