import Image from 'next/image';
import React from 'react'
import styles from './Bento.module.css'
function BentoRoom() {
    let imagessrc=['https://plus.unsplash.com/premium_photo-1684863506939-17dc77365f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHdvJTIwaW50ZXJjb25uZWN0ZWQlMjBiZWRyb29tcyUyMGZvciUyMHByaXZhY3klMjBhbmQlMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1674567529981-2ce9cf4e9098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFR3byUyMGludGVyY29ubmVjdGVkJTIwYmVkcm9vbXMlMjBmb3IlMjBwcml2YWN5JTIwYW5kJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D',
            'https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=n8nHGdDtlr69LO1w7PaAGUvfn-8IKAw4vs88KoT0TEg=',
            'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFR3byUyMGVuJTIwc3VpdGUlMjBiYXRocm9vbXMlMjB3aXRoJTIwbHV4dXJ5JTIwdG9pbGV0cmllc3xlbnwwfHwwfHx8MA%3D%3D',  
            'https://images.unsplash.com/photo-1512397449499-22f22053e304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERpbmluZyUyMHRhYmxlJTIwYW5kJTIwa2l0Y2hlbmV0dGUlMjBhcmVhfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1680546332052-61f642670647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERpbmluZyUyMHRhYmxlJTIwYW5kJTIwa2l0Y2hlbmV0dGUlMjBhcmVhfGVufDB8fDB8fHww']
    return (
      <div className={styles.bento}>
        {imagessrc.map((src, index) =>{return <div
            key={index}
            className={`${styles.box} ${styles[`box${index + 1}`]}`}
            style={{ gridArea: `item${index + 1}` }}
          >
            <Image src={src} alt={`Room ${index + 1}`} fill className={styles.image} />
          </div>}

        )}
      </div>
    );
  }
  
  export default BentoRoom;