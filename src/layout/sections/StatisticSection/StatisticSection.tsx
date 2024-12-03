import React from 'react';
import styles from './StatisticSection.module.scss';
import clsx from 'clsx';

const DATA = [
  {
    title: (
      <div className={styles.cardTitle}>
        15 <span>+</span>
      </div>
    ),
    description: (
      <p className={styles.cardDescription}>
        livros publicados,
        <br /> incluindo
        <br /> «Casais Inteligentes Enriquecem Juntos»
      </p>
    ),
  },
  {
    title: (
      <div className={styles.cardTitle}>
        500 000 <span>+</span>
      </div>
    ),
    description: <p className={styles.cardDescription}>O homem treinou pessoas através <br /> de seus cursos</p>,
  },
  {
    title: (
      <div className={styles.cardTitle}>
        1 000 000 <span>+</span>
      </div>
    ),
    description: <p className={styles.cardDescription}>assinantes no YouTube</p>,
  },
  {
    title: (
      <div className={styles.cardTitle}>
        1 500 000 <span>+</span>
      </div>
    ),
    description: <p className={styles.cardDescription}>assinantes no Instagram</p>,
  },
];

export default function StatisticSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Gustavo Cerbasi</h3>
        <p className={styles.description}>Economista, autor best-seller e consultor financeiro</p>
        <div className={styles.content}>
          {DATA.map((card, index) => {
            return (
              <div key={index} className={clsx(styles.card, {
                [styles.first]: index === 0,
                [styles.three]: index === 2,
              })}>
                {card.title}
                {card.description}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
