import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";

import openings from "../../data/openings.json";
import {getSlugFromName} from "../../utils/url";
import Chessboard from "../../components/chessboard";
import styles from '../../styles/Opening.module.css'
import Link from "next/link";


function Opening({opening}) {
    return (
        <div className={styles.main}>
            <h2>{opening.name}</h2>
            <p>{opening.moves}</p>
            <Chessboard fen={opening.fen}/>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    return {
        props: {
            opening: openings.find(opening => context.params.slug === getSlugFromName(opening.name))
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: openings.map(opening =>
            ({
                params: {slug: getSlugFromName(opening.name)}
            })
        ),
        fallback: false,
    }
}

export default Opening
