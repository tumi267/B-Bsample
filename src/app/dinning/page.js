'use client'
import Hero from '@/app/components/hero/hero'
import React from 'react'
import { useParams } from 'next/navigation'
import BentoRoom from '@/app/components/bento/BentoRoom'
import styles from './dinning.module.css'
import BookingSideMenu from '@/app/components/bookingSidemenu/BookingSideMenu'
import BentoDinning from '../components/bento/BentoDinning'
function page() {

  return (
    <div className={styles.contain}>
      
      <h2 className={styles.special_item}>Dining</h2>

    <Hero
    url='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGluaW5nfGVufDB8fDB8fHww'/>
    <h3>offers a delightful culinary experience where tradition meets innovation. Our menu features a perfect blend of locally sourced ingredients, expertly crafted dishes, and flavors that will take your taste buds on an unforgettable journey.</h3>
    <h3>
    Whether you're here for a casual meal with friends or a special evening out, our welcoming atmosphere, exceptional service, and mouthwatering dishes will make every moment memorable. Indulge in our signature dishes, explore our extensive wine list, and enjoy the finest dining experience in town.
    </h3>


    <BentoDinning/>
    
    <h2 className={styles.special_item}>Chef's Specials</h2>
  <div class="special-item">
    <h3 className={styles.special_item}>Grilled Lobster Tail</h3>
    <p>A succulent lobster tail, grilled to perfection and served with garlic butter, seasonal vegetables, and your choice of side.</p>
  </div>
  <div class="special-item">
    <h3 className={styles.special_item}>Pan-Seared Duck Breast</h3>
    <p>Tender duck breast seared to a perfect crisp, accompanied by a rich berry reduction, mashed potatoes, and roasted root vegetables.</p>
  </div>
  <div class="special-item">
    <h3 className={styles.special_item}>Truffle Mushroom Risotto</h3>
    <p>A creamy risotto with wild mushrooms, finished with a touch of truffle oil, parmesan, and fresh herbs.</p>
  </div>
  <div class="special-item">
    <h3 className={styles.special_item}>Seared Ahi Tuna</h3>
    <p>Fresh Ahi tuna seared on the outside with a tender center, served with a soy-ginger glaze, jasmine rice, and sautéed greens.</p>
  </div>
    </div>
  )
}

export default page