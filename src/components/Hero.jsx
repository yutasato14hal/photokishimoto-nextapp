import React from 'react'
import Styles from '@/styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={Styles.Hero}>
      <div className={Styles.HeroContent}>
        <h1 className={Styles.HeroTitle}>スポーツの<span>「魅力」「力」「意義」</span><br/>を多くの人に伝えたい。</h1>
      </div>
    </div>
  )
}
