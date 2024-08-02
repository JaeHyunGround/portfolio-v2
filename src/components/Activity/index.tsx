import styles from './Activity.module.css'

export default function Activity() {
  return (
    <main className={styles.Activities}>
      <section className={styles.Activities__title}>Activities</section>
      <section className={styles.Activities__title_list}>
        <section className={styles.Activities__title_item}>
          <div className={styles.Activities__title_item_name}>
            <div>programmers DevCourse</div>
          </div>
          <div className={styles.Activities__title_item_detail}>
            <div>프로그래머스 데브코스 | 프론트엔드 5기</div>
          </div>
          <div className={styles.Activities__title_item_date}>
            2023.09 - 2024.03
          </div>
        </section>
        <section className={styles.Activities__title_item}>
          <div className={styles.Activities__title_item_name}>
            <div>LikeLion</div>
          </div>
          <div className={styles.Activities__title_item_detail}>
            <div>멋쟁이사자처럼 | 10기 FE 운영진, 11기 대표</div>
          </div>
          <div className={styles.Activities__title_item_date}>
            2021.12 - 2023.12
          </div>
        </section>
      </section>
    </main>
  )
}
