import styles from './Info.module.css'

export default function Info() {
  return (
    <main className={styles.Info}>
      <section className={styles.Info__my__info}>
        <div>
          <span>Frontend Developer</span>
        </div>
        <div>
          <span>Email. </span>gothddlek@naver.com
        </div>
        <div>
          <span>Birth. </span>2001.06.30
        </div>
        <div>
          <span>Residence. </span>South Korea
        </div>
        <div>
          <span>Bachelor Degree. </span>Kumoh Institute of Technology.
          Electronic IT convergence (2020.03 - 2024.02)
        </div>
      </section>
      <section className={styles.Info__introduce}>
        <div>
          안녕하세요 :) 주니어 Frontend 개발자 안재현입니다. <br />
          눈에 보이는 것을 직접 조작할 수 있다는 Frontend의 매력에 빠져 Frontend
          개발자를 꿈꾸게 되었습니다. <br />
          수많은 경험과 학습을 통해 다양한 기술 스택을 습득하고 적재적소에
          알맞은 기술을 사용하여 <br />
          최적의 사용자 경험을 전달하는 Frontend 개발자가 되고 싶습니다.
        </div>
      </section>
    </main>
  )
}
