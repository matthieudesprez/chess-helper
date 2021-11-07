import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>♟ Chess Helper</title>
                <meta name="description" content="Chess Helper"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Chess Helper
                </h1>

                <div className={styles.grid}>
                    <Link href="/openings">
                        <div className={styles.card}>
                            <h2>Openings</h2>
                            <p>Find in-depth information about all chess Openings.</p>
                        </div>
                    </Link>
                    {/*<Link href="/learning">*/}
                    {/*    <div className={styles.card}>*/}
                    {/*        <h2>Learn</h2>*/}
                    {/*        <p>Test yourself about chess openings through flash cards</p>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
