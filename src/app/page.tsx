'use client';

import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.homeCard}>
        <img src="/images/logo_oba.png" />

        <button
          className={styles.buttonHome}
          onClick={() => router.push('/questions')}
        >
          Iniciar desafio
        </button>
      </div>
    </main>
  );
}
