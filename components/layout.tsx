import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <Link href="/">
                <h1><a>♟ Chess Helper</a></h1>
            </Link>
            <main>{children}</main>
        </>
    )
}