import React, { FC } from 'react';
import styles from './LearnCard.module.scss';
import Image from 'next/image';

interface ILearnCard {
  icon: string;
  text: string;
}

export const LearnCard: FC<ILearnCard> = ({ text, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Image src={icon} width={100} height={100} alt='icon' />
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
