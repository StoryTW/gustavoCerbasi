import React from 'react';
import styles from './FaqSection.module.scss';
import { FaqItem } from './FaqItem/FaqItem';

const DATA = [
  {
    count: '01/',
    question: 'Preciso de experiência prévia para fazer o curso?',
    answer:
      'text text text text text text text text text text text text text text text text text text',
  },
  {
    count: '02/',
    question: 'Quanto tempo leva para concluir o curso?',
    answer:
      'text text text text text text text text text text text text text text text text text text',
  },
  {
    count: '03/',
    question: 'O que acontece após a inscrição?',
    answer:
      'text text text text text text text text text text text text text text text text text text',
  },
];

export default function FaqSection() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {DATA.map((item) => {
            return <FaqItem key={item.count} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
