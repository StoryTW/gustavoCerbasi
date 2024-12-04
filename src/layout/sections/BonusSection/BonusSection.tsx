import React from 'react';
import styles from './BonusSection.module.scss';
import Image from 'next/image';

export default function BonusSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Bônus exclusivos para inscritos hoje!</h2>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} type='button' tabIndex={-1}>
            «Listas de verificação para traders»
            <Image
              src={'/images/icon-download.svg'}
              width={119}
              height={117}
              alt='icon'
              className={styles.icon}
            />
          </button>
          <button className={styles.btn} type='button' tabIndex={-1}>
            «Introdução ao mercado de futuros»
            <Image
              src={'/images/icon-download.svg'}
              width={119}
              height={117}
              alt='icon'
              className={styles.icon}
            />
          </button>
        </div>
        <div className={styles.timer}>
          12 : 21 : 15 : 27
        </div>
      </div>
    </section>
  );
}
