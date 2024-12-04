import React from 'react';
import styles from './MainPage.module.scss';
import MainSection from '@/layout/sections/MainSection/MainSection';
import dynamic from 'next/dynamic';

const WhatLearnSection = dynamic(
  () => import('@/layout/sections/WhatLearnSection/WhatLearnSection'),
);

const StatisticSection = dynamic(
  () => import('@/layout/sections/StatisticSection/StatisticSection'),
);

const TeamSection = dynamic(() => import('@/layout/sections/TeamSection/TeamSection'));

const BonusSection = dynamic(
  () => import('@/layout/sections/BonusSection/BonusSection'),
);

const FaqSection = dynamic(
  () => import('@/layout/sections/FaqSection/FaqSection'),
);

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <MainSection />
      <WhatLearnSection />
      <StatisticSection />
      <TeamSection />
      <BonusSection />
      <FaqSection />
    </main>
  );
};
