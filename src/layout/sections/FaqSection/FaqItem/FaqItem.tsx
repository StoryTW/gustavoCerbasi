'use client';
import React, { FC, useState } from 'react';
import styles from './FaqItem.module.scss';
import { motion } from 'motion/react';
import Arrow from '@/assets/images/ui/icon-arrow-down.svg';
import clsx from 'clsx';

interface IFaqItem {
  count: string;
  question: string;
  answer: string;
}

const cardVariants = {
  open: { height: 'auto', opacity: 1 },
  close: {
    height: 0,
    overflow: 'hidden',
    opacity: 0,
  },
};

export const FaqItem: FC<IFaqItem> = ({ count, question, answer }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggle = () => setIsActive((prev) => !prev);

  return (
    <div className={styles.root} onClick={toggle}>
      <div className={styles.questionWrapper}>
        <div className={styles.question}>
          <div className={styles.count}>{count}</div>
          <div className={styles.text}>{question}</div>
        </div>
        <div
          className={clsx(styles.icon, {
            [styles.active]: isActive,
          })}
        >
          <Arrow />
        </div>
      </div>
      <motion.div
        variants={cardVariants}
        initial='close'
        exit='close'
        animate={isActive ? 'open' : 'close'}
        transition={{
          duration: 0.8,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        <div className={styles.answerLabel}>{answer}</div>
      </motion.div>
    </div>
  );
};
