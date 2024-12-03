import React, { FC, HTMLAttributes } from 'react';
import styles from './LearnCard.module.scss';
import Image from 'next/image';

interface ILearnCard extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  text: string;
}

export const LearnCard: FC<ILearnCard> = ({ text, icon, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.wrapper}>
        <Image src={icon} width={100} height={100} alt='icon' />
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
