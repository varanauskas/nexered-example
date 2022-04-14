import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const SlugRedirect = () => {
  const options = ["slug-a", "slug-b", "slug-c", "slug-d"];
  const [selected, setSelected] = useState(options[0]);
  return (
    <span className={styles.card}>
      <a href={`/splat-redirect/${selected}`}>
        <h2>Slug redirect &rarr;</h2>
      </a>
      <p>
        <label htmlFor="slug">:slug</label>
        <select name="slug" id="slug" value={selected} onChange={event => setSelected(event.target.value)}>
          {options.map(option => <option key={option} >{option}</option>)}
        </select>
      </p>
    </span>
  );
}

const WildcardRedirect = () => {
  const [value, setValue] = useState('wild/card');

  return (
    <span className={styles.card}>
      <a href={`/wildcard-redirect/${value}`}>
        <h2>Wildcard redirect &rarr;</h2>
      </a>
      <p>
        <label htmlFor="wildcard">:wildcard*</label>
        <input type="text" name="wildcard" id="wildcard" value={value} onChange={event => setValue(event.target.value)} />
      </p>
    </span>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXERED Example</title>
        <meta name="description" content="Example of nexered" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/varanauskas/nexered">NEXERED</a> example.
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            <pre>
{`{ source: "/simple-redirect", destination: "/simple-redirect-result", permanent: false },
{ source: "/splat-redirect/:splat", destination: "/splat-redirect-result/:splat", permanent: false },
{ source: "/wildcard-redirect/:wildcard*", destination: "/simple-redirect-result/:wildcard*", permanent: false },`}
            </pre>
          
          </code>
        </p>

        <div className={styles.grid}>
          <a href="/simple-redirect" className={styles.card}>
            <h2>Simple redirect &rarr;</h2>
          </a>

          <SlugRedirect />

          <WildcardRedirect />
        </div>
      </main>
    </div>
  )
}

export default Home
