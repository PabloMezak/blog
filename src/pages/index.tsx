import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/home.module.scss'
import techsImage from '../../public/images/techs.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Love for Tecnology - PabloDev++</title>
      </Head>
      <main className={styles.container}>

        <div className={styles.containerHeader}>

          <section className={styles.ctaText}>
            <h1>Talking you to The Next level!</h1>
            <span>A platform with courses that go from scratch to professional in practice, straight to the point applying what we use in the job market. 👊</span>
            <a>
              <button>Begins Now!</button>
            </a>

          </section>
          <img src="images/banner-conteudos.png" alt="Content PabloBlog++" />
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>Learn how to create apps for Android and IOS devices</h2>
            <span>you will discover how to develop modern native apps for Android and iOS, by building apps with React Native</span>
          </section>
          <img src="/images/financasApp.png" alt="Mobiles Content" />
        </div>
        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <img src="images/webDev.png" alt="web App content" />

          <section>
            <h2>Learn how to create Web Systems</h2>
            <span>Create web system and webSites using more morden tecnologies and required for the market</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt='Linguages programmer photo' />
          <h2>more than <span className={styles.alunos}>15 thousand</span> took their career to the next level
          </h2>
          <span>Are you going to miss this chance to evolve?
          </span>
          <a href="">
            <button>
                ACCESS CLASS!
            </button>
          </a>
        </div>

      </main>
    </>
  )
}
