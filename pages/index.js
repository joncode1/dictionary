import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dictionary App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Dictionary Search</h1>
        <p>Input your word to find the definition.</p>

        <div className="topnav">
            <input type="text" placeholder="Search.."/>
        </div>
    </div>
  )
}
