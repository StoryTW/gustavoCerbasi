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

const BonusAndFaqSection = dynamic(
  () => import('@/layout/sections/BonusAndFaqSection/BonusAndFaqSection'),
);

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <MainSection />
      <WhatLearnSection />
      <StatisticSection />
      <TeamSection />
      <BonusAndFaqSection />
    </main>
  );
};
