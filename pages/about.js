import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import styles from "../styles/index.module.css";

const AboutPage = (myWord) =>(
    <div className={styles.container}>
        <Head>
            <title>About  | Dictionary </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>About Page</h1>
        <p>Updated on: {myWord.thePassed.price}</p>
    </div>
);

AboutPage.getInitialProps = async function() {
    const myRES = await fetch('https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD');
    const myDATA = await myRES.json();
    return {
        thePassed: myDATA,

    };
}

export default AboutPage;