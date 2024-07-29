'use client'

import { Links } from '@/constants'
import styles from './Main.module.css'
import Link from '@/components/Link'

export default function Main() {
  return (
    <main className={styles.Main}>
      <section className={styles.Main__title}>
        <div className={styles.title}>REX</div>
        <div className={styles.title}>
          AHN
          <br />
          JAEHYUN
        </div>
      </section>
      <section className={styles.Main__myLink}>
        {Links.map((item, index) => {
          return (
            <Link
              key={index}
              name={item.name}
              link={item.link}
            />
          )
        })}
      </section>
    </main>
  )
}
