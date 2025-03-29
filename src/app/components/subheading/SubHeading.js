import React from 'react'
import styles from './SubHeading.module.css'
function SubHeading({heading}) {
  return (
    <section className={styles.contain}>
        <h2 >{heading}</h2>
    </section>
  )
}

export default SubHeading