import Head from 'next/head'
import styles from "../styles/index.module.css";

const AboutPage = () =>(
    <div className={styles.container}>
        <Head>
            <title>About | Dictionary </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>About Page</h1>
    </div>
);

export default AboutPage;