import React from 'react';
import styles from './MainSection.module.scss';
import { Header } from '@/layout/Header/Header';
import Image from 'next/image';

export default function MainSection() {
  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.section}>
        <h1 className={styles.title}>
          Descubra os <span>segredos para lucrar com futuros</span> com Gustavo Cerbasi.
        </h1>
        <p className={styles.description}>Transforme sua vida financeira começando hoje.</p>
        <div className={styles.timer}>
          12 : 21 : 15 : 27
        </div>
        <button className={styles.btn} type='button' tabIndex={-1}>
          Inscreva-se agora
          <Image
            src={'/images/icon-circle-arrow.svg'}
            width={84}
            height={84}
            alt='arrow'
            className={styles.arrow}
          />
        </button>
      </section>
    </div>
  );
}
