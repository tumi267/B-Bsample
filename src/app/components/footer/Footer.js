import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <section className={styles.footer}>
    <div className={styles.content}>
        <div className={styles.discription}>
        discription
        </div>
        <div className={styles.links}>
        pages
        </div >
        <div className={styles.contact}>
            contact
        </div>
    </div>
    </section>
  )
}

export default Footer