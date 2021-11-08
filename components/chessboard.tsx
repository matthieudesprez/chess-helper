import styles from "./chessboard.module.css";
import {ChessboardProps, ChessboardState} from "../interfaces/chessboard";
import {useEffect, useState} from "react";
import {
    historyToHistoryStates,
    historyToMoves,
    mapIndexToCoordinates,
    mapIndexToFile,
    movesToHistory
} from "../utils/chessboard";

const mapIndexToInitialPiece = (state: ChessboardState, index: number) => {
    const coordinates = mapIndexToCoordinates(index);
    const piece = state[`${coordinates.file}${coordinates.rank}`]
    return piece && <piece.component fill={piece.color}/>
}


const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({key}: { key: string }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({key}: { key: string }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
}

function Chessboard({moves}: ChessboardProps) {
    const leftPress = useKeyPress("ArrowLeft");
    const rightPress = useKeyPress("ArrowRight");
    const [movesHistory, setMovesHistory] = useState(movesToHistory(moves));
    const [historyStates, setHistoryStates] = useState(historyToHistoryStates(movesHistory))
    const [displayedMovesHistory, setDisplayedMovesHistory] = useState(movesHistory);
    const [state, setState] = useState(historyStates[historyStates.length - 1]);

    const navigateBackward = () => {
        if (displayedMovesHistory.length > 0) {
            const newDisplayedMovesHistory = displayedMovesHistory.slice(0, -1)
            setDisplayedMovesHistory(newDisplayedMovesHistory)
            setState(historyToHistoryStates(newDisplayedMovesHistory).pop())
        }
    }

    const navigateForward = () => {
        if (displayedMovesHistory.length < movesHistory.length) {
            const newDisplayedMovesHistory = [...displayedMovesHistory, movesHistory[displayedMovesHistory.length]]
            setDisplayedMovesHistory(newDisplayedMovesHistory)
            setState(historyToHistoryStates(newDisplayedMovesHistory).pop())
        }
    }

    // useEffect(() => {
    //     setState(historyToHistoryStates(displayedMovesHistory).pop())
    // }, [displayedMovesHistory]);

    useEffect(() => {
        if (leftPress) {
            navigateBackward()
        }
    }, [leftPress]);

    useEffect(() => {
        if (rightPress) {
            navigateForward()
        }
    }, [rightPress]);


    return (
        <div>
            <div className={styles.movesHistory}>
                {historyToMoves(displayedMovesHistory)}
            </div>
            <div className={styles.chessboardContainer}>
                <div className={styles.chessboardRowsInfo}>
                    {[8, 7, 6, 5, 4, 3, 2, 1].map((index) => (
                        <div key={index}>{index}</div>
                    ))}
                </div>
                <div className={styles.chessboard}>
                    {Array(64).fill(null).map((_, index) => (
                        <div key={index} className={styles.cell}>{mapIndexToInitialPiece(state, index)}</div>
                    ))}
                </div>
                <div className={styles.chessboardFilesInfo}>
                    {Array(8).fill(null).map((_, index) => (
                        <div key={index}>{mapIndexToFile(index + index * 8)}</div>
                    ))}
                </div>
            </div>

            <div className={styles.historyNavigation}>
                <button onClick={navigateBackward} disabled={displayedMovesHistory.length === 0}>◀</button>
                &nbsp;
                <button onClick={navigateForward} disabled={displayedMovesHistory.length === movesHistory.length}>▶
                </button>
            </div>
        </div>
    )
}

export default Chessboard
