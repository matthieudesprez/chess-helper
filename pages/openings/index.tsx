import {GetStaticProps} from "next";
import Link from 'next/link'
import styles from './openings.module.css'

import openings from "../../data/openings.json";
import {getSlugFromName} from "../../utils/url";
import {useCallback, useRef, useState} from "react";

function Openings({openings}) {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState(openings)

    const onChange = useCallback((event) => {
        const query = event.target.value;
        setQuery(query)
        const lowercaseQuery = query.toLowerCase();
        if (query.length) {
            setResults(openings.filter((opening) => opening.name.toLowerCase().includes(lowercaseQuery)))
        } else {
            setResults(openings)
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <div className={styles.openings}>
            <div
                className={styles.container}
                ref={searchRef}
            >
                <input
                    className={styles.search}
                    onChange={onChange}
                    onFocus={onFocus}
                    placeholder='Search'
                    type='text'
                    value={query}
                />
            </div>
            <ul>
                {results.map((opening, idx) =>
                    (
                        <li key={idx}>
                            <Link href={`/openings/${getSlugFromName(opening.name)}`}>{opening.name}</Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            openings
        },
    }
}


export default Openings
