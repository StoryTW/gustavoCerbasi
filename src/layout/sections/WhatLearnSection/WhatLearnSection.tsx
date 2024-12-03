import React from 'react';
import styles from './WhatLearnSection.module.scss';
import { LearnCard } from './LearnCard/LearnCard';

const DATA = [
  {
    icon: '/images/learn/icon-section.svg',
    text: 'Os fundamentos do mercado de futuros',
  },
  {
    icon: '/images/learn/icon-shield.svg',
    text: 'Estratégias para minimizar riscos',
  },
  {
    icon: '/images/learn/icon-dollar-coin.svg',
    text: 'Como identificar tendências e oportunidades',
  },
];

export default function WhatLearnSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>O que você aprenderá?</h2>
        <div className={styles.content}>
          {DATA.map((card) => {
            return (
              <LearnCard key={card.text} icon={card.icon} text={card.text} />
            )
          })}
        </div>
      </div>
    </section>
  );
}
