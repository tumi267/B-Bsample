import Image from 'next/image';
import React from 'react'
import styles from './Bento.module.css'
function BentoDinning() {
    let imagessrc=['https://images.unsplash.com/photo-1565895405127-481853366cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGluaW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGluaW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1562050147-fda1cc9a6378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1560963806-394647f30329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fERpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',]
    return (
      <div className={styles.bentoDinning}>
        {imagessrc.map((src, index) => {
          return <div
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
  
  export default BentoDinning;