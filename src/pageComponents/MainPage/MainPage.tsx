import React from 'react'
import styles from './MainPage.module.scss'
import MainSection from '@/layout/sections/MainSection/MainSection'

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <MainSection />
    </main>
  )
}
