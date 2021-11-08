import styles from "./chessboard.module.css";
import {ChessboardCoordinates, ChessboardFile, ChessboardRanks, Color, Piece} from "../interfaces/chessboard";
import Pawn from "./pawn";
import Rook from "./rook";
import Knight, {KnightProps} from "./knight";
import Bishop from "./bishop";
import Queen from "./queen";
import King from "./king";
import {useEffect, useState} from "react";

export declare type ChessboardProps = {
    fen?: string;
    moves?: string;
};

export interface ChessboardPiece {
    color: Color;
    pieceName: Piece;
    component: (any) => JSX.Element
}

export type ChessboardState = { [key: string]: ChessboardPiece }

const initialState: ChessboardState = {
    a8: {color: Color.Black, pieceName: Piece.Rook, component: Rook},
    b8: {color: Color.Black, pieceName: Piece.Knight, component: Knight},
    c8: {color: Color.Black, pieceName: Piece.Bishop, component: Bishop},
    d8: {color: Color.Black, pieceName: Piece.Queen, component: Queen},
    e8: {color: Color.Black, pieceName: Piece.King, component: King},
    f8: {color: Color.Black, pieceName: Piece.Bishop, component: Bishop},
    g8: {color: Color.Black, pieceName: Piece.Knight, component: Knight},
    h8: {color: Color.Black, pieceName: Piece.Rook, component: Rook},
    a7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    b7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    c7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    d7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    e7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    f7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    g7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    h7: {color: Color.Black, pieceName: Piece.Pawn, component: Pawn},
    a2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    b2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    c2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    d2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    e2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    f2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    g2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    h2: {color: Color.White, pieceName: Piece.Pawn, component: Pawn},
    a1: {color: Color.White, pieceName: Piece.Rook, component: Rook},
    b1: {color: Color.White, pieceName: Piece.Knight, component: Knight},
    c1: {color: Color.White, pieceName: Piece.Bishop, component: Bishop},
    d1: {color: Color.White, pieceName: Piece.Queen, component: Queen},
    e1: {color: Color.White, pieceName: Piece.King, component: King},
    f1: {color: Color.White, pieceName: Piece.Bishop, component: Bishop},
    g1: {color: Color.White, pieceName: Piece.Knight, component: Knight},
    h1: {color: Color.White, pieceName: Piece.Rook, component: Rook},
}

const mapIndexToFile = (index: number): ChessboardFile => {
    switch (index % 8) {
        case 0:
            return ChessboardFile.a;
        case 1:
            return ChessboardFile.b;
        case 2:
            return ChessboardFile.c;
        case 3:
            return ChessboardFile.d;
        case 4:
            return ChessboardFile.e;
        case 5:
            return ChessboardFile.f;
        case 6:
            return ChessboardFile.g;
        default:
            return ChessboardFile.h;
    }
}

const mapIndexToRank = (index: number): ChessboardRanks => 8 - Math.floor(index / 8) as ChessboardRanks

const mapIndexToCoordinates = (index: number): ChessboardCoordinates => {
    return {
        file: mapIndexToFile(index),
        rank: mapIndexToRank(index),
    }
}

const mapIndexToInitialPiece = (state: ChessboardState, index: number) => {
    const coordinates = mapIndexToCoordinates(index);
    const piece = state[`${coordinates.file}${coordinates.rank}`]
    return piece && <piece.component fill={piece.color}/>
}


const movesToHistory = (moves: string): Array<string> => {
    const history = moves.split(/(\d\. )/).filter(x => !x.includes("."))
    history.shift()
    const result = []
    history.forEach(h => {
        h.trim().split(" ").forEach(m => {
            result.push(m)
        })
    })
    return result
}

const historyToMoves = (history: Array<string>): string => {
    let result = [];
    for (let i = 0; i < history.length; i += 2) {
        let r = `${i / 2 + 1}. ${history[i]}`
        if (typeof history[i + 1] !== 'undefined') {
            r += ` ${history[i + 1]}`
        }
        result.push(r)
    }
    return result.join(" ")
}

const fileToNumber = (file: ChessboardFile): number => {
    return {
        [ChessboardFile.a]: 1,
        [ChessboardFile.b]: 2,
        [ChessboardFile.c]: 3,
        [ChessboardFile.d]: 4,
        [ChessboardFile.e]: 5,
        [ChessboardFile.f]: 6,
        [ChessboardFile.g]: 7,
        [ChessboardFile.h]: 8,
    }[file]
}

const numberToFile = (fileNumber: number): ChessboardFile => {
    return {
        1: ChessboardFile.a,
        2: ChessboardFile.b,
        3: ChessboardFile.c,
        4: ChessboardFile.d,
        5: ChessboardFile.e,
        6: ChessboardFile.f,
        7: ChessboardFile.g,
        8: ChessboardFile.h,
    }[fileNumber]
}

const blackSquareCoordinates = ["b8", "d8", "f8", "h8", "a7", "c7", "e7", "g7", "b6", "d6", "f6", "h6", "a5", "c5", "e5", "g5", "b4", "d4", "f4", "h4", "a3", "c3", "e3", "g3", "b2", "d2", "f2", "h2", "a1", "c1", "e1", "g1"]

const whiteSquareCoordinates = ["a8", "c8", "e8", "g8", "b7", "d7", "f7", "h7", "a6", "c6", "e6", "g6", "b5", "d5", "f5", "h5", "a4", "c4", "e4", "g4", "b3", "d3", "f3", "h3", "a2", "c2", "e2", "g2", "b1", "d1", "f1", "h1"]

const getPreviousPiecePosition = (previousState: ChessboardState, pieceName: Piece, newFile: ChessboardFile, newRank: number, color: Color, capture: boolean, previousKnownFile: ChessboardFile, previousKnownRank: number): ChessboardCoordinates => {
    let previousFile = previousKnownFile
    let previousRank = previousKnownRank;
    const newFileNumber = fileToNumber(newFile)
    if (pieceName === Piece.Pawn) {
        if (capture) {
            if (color === Color.White) {
                previousRank = newRank - 1
            } else {
                previousRank = newRank + 1
            }
            // previousKnownFile will most likely be provided
            previousFile = previousKnownFile // || previousState[`${numberToFile(newFileNumber - 1)}${previousRank}`] ? numberToFile(newFileNumber - 1) : numberToFile(newFileNumber + 1)
        } else {
            previousFile = newFile
            if (color === Color.White) {
                previousRank = previousState[`${previousFile}${newRank - 1}`] ? newRank - 1 : newRank - 2
            } else {
                previousRank = previousState[`${previousFile}${newRank + 1}`] ? newRank + 1 : newRank + 2
            }
        }
    } else if (pieceName === Piece.Knight) {
        const possiblePreviousCoordinates = [
            `${numberToFile(newFileNumber - 1)}${newRank - 2}`,
            `${numberToFile(newFileNumber + 1)}${newRank - 2}`,
            `${numberToFile(newFileNumber - 1)}${newRank + 2}`,
            `${numberToFile(newFileNumber + 1)}${newRank + 2}`,
            `${numberToFile(newFileNumber - 2)}${newRank - 1}`,
            `${numberToFile(newFileNumber + 2)}${newRank - 1}`,
            `${numberToFile(newFileNumber - 2)}${newRank + 1}`,
            `${numberToFile(newFileNumber + 2)}${newRank + 1}`,
        ]

        const matchingCoordinates = possiblePreviousCoordinates.map(coordinates => ({
            ...previousState[coordinates], coordinates
        })).filter(piece => !!piece && piece.color === color && piece.pieceName === pieceName)

        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0].coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p.coordinates[0] === previousKnownFile).coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p.coordinates[1]) === previousRank).coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.Bishop) {
        const possiblePreviousCoordinates = whiteSquareCoordinates.includes(`${newFile}${newRank}`) ? whiteSquareCoordinates : blackSquareCoordinates
        const matchingCoordinates = possiblePreviousCoordinates.map(coordinates => ({
            ...previousState[coordinates], coordinates
        })).filter(piece => piece.color === color && piece.pieceName === pieceName)
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0].coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p.coordinates[0] === previousKnownFile).coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p.coordinates[1]) === previousRank).coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.Rook) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return piece.color === color && piece.pieceName === pieceName && (coordinates[0] === newFile || parseInt(coordinates[1]) === newRank)
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0].coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p.coordinates[0] === previousKnownFile).coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p.coordinates[1]) === previousRank).coordinates[0] as ChessboardFile
            } else {
                // determine which rook based on the presence of obstacle

            }
        }
    } else if (pieceName === Piece.Queen) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return piece && piece.color === color && piece.pieceName === pieceName
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0].coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p.coordinates[0] === previousKnownFile).coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p.coordinates[1]) === previousRank).coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.King) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return piece.color === color && piece.pieceName === pieceName
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
        previousRank = parseInt(matchingCoordinates[0].coordinates[1]) as ChessboardRanks
    }
    return {
        file: previousFile as ChessboardFile,
        rank: previousRank as ChessboardRanks,
    }
}

const historyToHistoryStates = (history: Array<string>): Array<ChessboardState> => {
    const result = [initialState]
    history.forEach((h, index) => {
        const color = index % 2 === 0 ? Color.White : Color.Black

        const nextState = {...result[result.length - 1]}
        if (h === "O-O") {
            if (color === Color.Black) {
                const king = nextState["e8"]
                delete nextState["e8"]
                const rook = nextState["h8"]
                delete nextState["h8"]
                nextState["g8"] = king
                nextState["f8"] = rook
            } else {
                const king = nextState["e1"]
                delete nextState["e1"]
                const rook = nextState["h1"]
                delete nextState["h1"]
                nextState["g1"] = king
                nextState["f1"] = rook
            }
        } else if (h === "O-O-O") {
            if (color === Color.Black) {
                const king = nextState["e8"]
                delete nextState["e8"]
                const rook = nextState["a8"]
                delete nextState["a8"]
                nextState["c8"] = king
                nextState["d8"] = rook
            } else {
                const king = nextState["e1"]
                delete nextState["e1"]
                const rook = nextState["a1"]
                delete nextState["a1"]
                nextState["c1"] = king
                nextState["d1"] = rook
            }
        } else {
            const hArray = h.split("")
            const rank = parseInt(hArray.pop())
            const file = hArray.pop() as ChessboardFile

            const capture = hArray[hArray.length - 1] === "x"
            if (capture) {
                hArray.pop()
            }
            const pieceComponent = ["R", "N", "B", "K", "Q"].includes(hArray[0]) ? {
                R: Rook,
                N: Knight,
                B: Bishop,
                K: King,
                Q: Queen,
            }[hArray.shift()] : Pawn

            // additional information to tell similar matches appart
            let previousKnownFile, previousKnownRank
            if (hArray.length > 0) {
                if ([1, 2, 3, 4, 5, 6, 7, 8].includes(parseInt(hArray[hArray.length - 1]))) {
                    previousKnownRank = parseInt(hArray.pop())
                }
                if (["a", "b", "c", "d", "e", "f", "g", "h"].includes(hArray[hArray.length - 1])) {
                    previousKnownFile = hArray.pop()
                }
            }

            const previousPosition = getPreviousPiecePosition(result[result.length - 1], pieceComponent.name as Piece, file, rank, color, capture, previousKnownFile, previousKnownRank)
            // if(!previousPosition.file || !previousPosition.rank) {
            //     throw Error("missing previous position")
            // }
            const piece = nextState[`${previousPosition.file}${previousPosition.rank}`]
            delete nextState[`${previousPosition.file}${previousPosition.rank}`]
            nextState[`${file}${rank}`] = piece
        }
        result.push(nextState)
    })
    return result
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
            setDisplayedMovesHistory(displayedMovesHistory.slice(0, -1))
        }
    }

    const navigateForward = () => {
        if (displayedMovesHistory.length < movesHistory.length) {
            setDisplayedMovesHistory([...displayedMovesHistory, movesHistory[displayedMovesHistory.length]])
        }
    }

    useEffect(() => {
        setState(historyToHistoryStates(displayedMovesHistory).pop())
    }, [displayedMovesHistory]);


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
