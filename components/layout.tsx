import Link from "next/link";
import styles from './layout.module.css'


export default function Layout({children}) {
    return (
        <>
            <div className={styles.navbar}>
                <div>
                    <Link href="/">
                        <h1><a>♟ Chess Helper</a></h1>
                    </Link>
                </div>
                <div>|</div>
                <div>
                    <Link href={`/openings`}><a className={styles.navbarItem}>Openings</a></Link>
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}