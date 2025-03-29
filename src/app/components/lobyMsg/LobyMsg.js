import React from 'react'
import styles from './LobyMsg.module.css'
function LobyMsg({msg,heading}) {
  return (
    <section className={styles.contain}>
    <h1>{heading}</h1>
    <h2 className={styles.message}>{msg}</h2>
    </section>
  )
}

export default LobyMsg