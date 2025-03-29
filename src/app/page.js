import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/nav'
import Hero from './components/hero/hero'
import ImageRight from './components/ImageRight/ImageRight'
import LobyMsg from './components/lobyMsg/LobyMsg'
import ImageLeft from './components/imageLeft/imageleft'
import SubHeading from './components/subheading/SubHeading'
import Subhero from './components/subhero/Subhero'
import Slider from './components/slider/Slider'
import BookingHead from './components/bookinghead/Bookinghead'
import CardRandomiser from './components/cardRandomiser/CardRandomiser'

export default function Home() {
  return (
   <>
   <main className={styles.contain}>
   <Slider/>
   <BookingHead/>
    {/* <Hero
    url='https://plus.unsplash.com/premium_photo-1726754534427-771ee19ec8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFmcmljYSUyMGhvdGVsfGVufDB8fDB8fHww'
    /> */}
    {/* booking */}
    <LobyMsg
    heading='Welcome to africa B&B'
    msg="Feel the warmth of true African hospitality as you step into our home. Here, every guest is family, and every stay is filled with comfort, laughter, and the rich spirit of our land. Wake up to the aroma of homemade delights, unwind in the beauty of nature, and let the rhythm of Africa soothe your soul. Whether you're here to rest or explore, we welcome you with open arms and heartfelt smiles. Sawubona, welcome home!"
    />

    <ImageRight
    msg="Nestled in the busy city of Johannesburg, our charming bed and breakfast offers a peaceful retreat amidst the hustle and bustle. Whether you're here for a relaxing getaway, a special occasion, or a business trip, we are committed to making your stay unforgettable. Enjoy cozy rooms, delicious homemade breakfasts, and a welcoming atmosphere that feels just like home. We can’t wait to host you!"
    url='https://plus.unsplash.com/premium_photo-1682129723915-70ef9298f99b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFmcmljYSUyMGhvdGVsfGVufDB8fDB8fHww'
    />
    {/* <SubHeading
    heading='Our Services'
    /> */}
    
    <SubHeading
    heading='Savor the Flavors of Africa A Experience Like No Other'
    />

    <CardRandomiser/>
  
   </main>
   </>
  )
}
