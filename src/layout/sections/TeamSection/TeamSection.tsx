import React from 'react';
import styles from './TeamSection.module.scss';
import Image from 'next/image';

const DATA = [
  {
    photoSrc: '/images/team/photo-joao2.png',
    name: 'João',
    job: '«Esse curso mudou minha visão sobre investimentos»',
  },
  {
    photoSrc: '/images/team/photo-maria2.png',
    name: 'Maria',
    job: '«Graças ao Cerbasi, conquistei minha liberdade financeira»',
  },
  {
    photoSrc: '/images/team/photo-pedro2.png',
    name: 'Pedro',
    job: '«Incrível! A informação é apresentada de forma clara e estruturada»',
  },
];

export default function TeamSection() {
  return (
    <section className={styles.root}>
      <div className={styles.bg}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Comentários dos participantes</h2>
          <div className={styles.content}>
            {DATA.map((card) => {
              return (
                <div key={card.name} className={styles.card}>
                  <div className={styles.cardWrapper}>
                    <Image src={card.photoSrc} width={370} height={370} alt='photo'className={styles.photo} />
                    <div className={styles.name}>{card.name}</div>
                    <div className={styles.job}>{card.job}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
