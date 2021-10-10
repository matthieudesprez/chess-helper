import {GetStaticProps} from "next";
import Link from 'next/link'

import openings from "../../data/openings.json";
import {getSlugFromName} from "../../utils/url";

function Openings({openings}) {
    return (
        <>
            <h2>openings</h2>
            <ul>
                {openings.map((opening, idx) =>
                    (
                        <li key={idx}>
                            <Link href={`/openings/${getSlugFromName(opening.name)}`}>{opening.name}</Link>
                        </li>
                    )
                )}
            </ul>
        </>
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
