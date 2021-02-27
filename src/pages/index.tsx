import React from 'react';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Inicio | MoveIT</title>
      </Head>

      <ExperienceBar />
      <section className={styles.leftContainer}>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className={styles.rightContainer}>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
