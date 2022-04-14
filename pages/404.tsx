import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXERED Example Redirect Result</title>
        <meta name="description" content="Example of nexered" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/varanauskas/nexered">NEXERED</a> example.
        </h1>

        {typeof document !== "undefined" && <>
          <p className={styles.description}>
            You are now in {document.URL}
          </p>
        </>}


        <p className={styles.description}>
          <Link href="/"><a style={{ textDecoration: "underline" }}>Go back</a></Link>
        </p>
      </main>
    </div>
  )
}

export default Home
