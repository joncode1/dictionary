import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dictionary App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Dictionary Search</h1>
        <p>Input your word to find the definition.</p>

        <form>
            <label>
                <input type="text" name="word" />
            </label>
            <input className={styles.inputcolor} type="submit" value="Submit" />
        </form>
    </div>
  )
}
