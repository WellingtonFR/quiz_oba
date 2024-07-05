'use client';

import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.homeCard}>
        <Image src="/images/logo_oba.png"  width={400} height={222} alt="Picture of the author"className={styles.logoImage}/>

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
