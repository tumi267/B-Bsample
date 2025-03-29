import Image from 'next/image';
import React from 'react'
import styles from './Bento.module.css'
function BentoActivities() {
    let imagessrc=['https://images.unsplash.com/photo-1595272784243-ee3bcd91a819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1520156557489-31c63271fcd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1595272784243-ee3bcd91a819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1661670468082-a2c8c28122d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEd1aWRlZCUyMENpdHklMjBUb3VyfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzZXVtJTIwRXhwbG9yYXRpb258ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1723536997795-c492c713ac37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TXVzZXVtJTIwRXhwbG9yYXRpb258ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',]
    return (
      <div className={styles.BentoActivities}>
        {imagessrc.map((src, index) => {
          return<div
            key={index}
            className={`${styles.box} ${styles[`box${index + 1}`]}`}
            style={{ gridArea: `item${index + 1}` }}
          >
            <Image src={src} alt={`Room ${index + 1}`} fill className={styles.image} />
          </div>
        })}
      </div>
    );
  }
  
  export default BentoActivities;