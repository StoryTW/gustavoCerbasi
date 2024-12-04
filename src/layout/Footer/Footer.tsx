import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo/Logo';
import Instagram from '@/assets/images/socials/icon-inst.svg'
import Youtube from '@/assets/images/socials/icon-youtube.svg'
import Facebook from '@/assets/images/socials/icon-facebook.svg'
import Tiktok from '@/assets/images/socials/icon-tiktok.svg'
import Twitter from '@/assets/images/socials/icon-x.svg'
import Linkedin from '@/assets/images/socials/icon-linkedin.svg'
import Spotify from '@/assets/images/socials/icon-spotify.svg'
import Apple from '@/assets/images/socials/icon-apple.svg'

const DATA = [
  {
    link: 'https://www.instagram.com/gustavocerbasi/',
    icon: <Instagram />,
  },
  {
    link: 'https://www.youtube.com/c/gustavocerbasibr',
    icon: <Youtube />,
  },
  {
    link: 'https://twitter.com/gcerbasi',
    icon: <Twitter />,
  },
  {
    link: 'https://www.tiktok.com/@gustavocerbasi',
    icon: <Tiktok />,
  },
  {
    link: 'https://www.facebook.com/GustavoCerbasiOficial',
    icon: <Facebook />,
  },
  {
    link: 'https://br.linkedin.com/in/gustavocerbasi',
    icon: <Linkedin />,
  },
  {
    link: 'https://open.spotify.com/show/2VqGZVZmUnEqieAp7kwPKO?si=fGcyr86YSm6DDE3AnPaEuQ',
    icon: <Spotify />,
  },
  {
    link: 'https://podcasts.apple.com/br/podcast/drops-de-intelig%C3%AAncia-financeira/id1148746089',
    icon: <Apple />,
  },
];

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Pronto para transformar seu futuro?</h2>
        <a href='#' className={styles.link}>
          Inscreva-se agora
        </a>
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.socials}>
        <div className={styles.text}>Redes Sociais</div>
        <div className={styles.list}>
          {DATA.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
