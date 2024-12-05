import React from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

export const Logo = () => {
  return (
    <Link href={ROUTES.MAIN} className={styles.root}>
      <Image
        src={'/images/logo.svg'}
        width={299}
        height={48}
        alt='logo'
        className={styles.logo}
      />
    </Link>
  )
}
