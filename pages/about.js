import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import process from "../next.config"

const AboutPage = (myWord) =>(

    <div className={styles.container}>

        <Head>
            <title>About  | Dictionary </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>About Page2</h1>
        <p>Updated on: {myWord.returned.word}</p>
    </div>

);




AboutPage.getInitialProps = async function() {
    const myRES = await fetch("https://wordsapiv1.p.rapidapi.com/words/computer/typeOf", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": process.env.apiKeyWords,
        }
    });
    const myDATA = await myRES.json();

    return {
        returned: myDATA,
    };

}

export default AboutPage;