import {
    ChessboardCoordinates,
    ChessboardFile,
    ChessboardRanks,
    ChessboardState,
    Color,
    Piece
} from "../interfaces/chessboard";
import Rook from "../components/rook";
import Knight from "../components/knight";
import Bishop from "../components/bishop";
import Queen from "../components/queen";
import King from "../components/king";
import Pawn from "../components/pawn";

export const fenToState = (fen: string): ChessboardState => {
    const initialPositions = fen.split(" ")[0]
    const positions = initialPositions.split("/").reverse()
    const state = {}
    positions.forEach((position, rankIndex) => {
        let row = "";
        position.split("").forEach((pieceLetter: string) => {
            if (/^\d+$/.test(pieceLetter)) {
                row += "x".repeat(parseInt(pieceLetter));
            } else {
                row += pieceLetter;
            }
        });

        row.split("").forEach((pieceLetter: string, fileIndex) => {
            const coordinates = {
                file: mapIndexToFile(fileIndex),
                rank: rankIndex + 1,
            }
            const coordinatesString = `${coordinates.file}${coordinates.rank}`;
            switch (pieceLetter) {
                case "r":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.Rook, component: Rook};
                    break;
                case "n":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.Knight, component: Knight};
                    break;
                case "b":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.Bishop, component: Bishop};
                    break;
                case "q":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.Queen, component: Queen};
                    break;
                case "k":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.King, component: King};
                    break;
                case "p":
                    state[coordinatesString] = {color: Color.Black, pieceName: Piece.Pawn, component: Pawn};
                    break;
                case "R":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.Rook, component: Rook};
                    break;
                case "N":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.Knight, component: Knight};
                    break;
                case "B":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.Bishop, component: Bishop};
                    break;
                case "Q":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.Queen, component: Queen};
                    break;
                case "K":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.King, component: King};
                    break;
                case "P":
                    state[coordinatesString] = {color: Color.White, pieceName: Piece.Pawn, component: Pawn};
                    break;
                default:
                    break
            }
        })
    })
    return state;
}
// const fenToCurrentPlayer = (fen: string): Color => {
//     const [_, currentPlayer, ...rest] = fen.split(" ")
//     return currentPlayer === "w" ? Color.White : Color.Black
// }
// const fenToCastleInformation = (fen: string) => {
//     const [_, __, castleInformation, ...rest] = fen.split(" ")
//     return {
//         whiteKingCastle: castleInformation.includes("K"),
//         whiteQueenCastle: castleInformation.includes("Q"),
//         blackKingCastle: castleInformation.includes("k"),
//         blackQueenCastle: castleInformation.includes("q"),
//     }
// }

export const initialState: ChessboardState = {
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
export const mapIndexToFile = (index: number): ChessboardFile => {
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
export const mapIndexToCoordinates = (index: number): ChessboardCoordinates => {
    return {
        file: mapIndexToFile(index),
        rank: mapIndexToRank(index),
    }
}
export const movesToHistory = (moves: string): Array<string> => {
    const history = moves.split(/(\d+\. )/).filter(x => !x.includes("."))
    history.shift()
    const result = []
    history.forEach(h => {
        h.trim().split(" ").forEach(m => {
            result.push(m)
        })
    })
    return result
}
export const historyToMoves = (history: Array<string>): string => {
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
            previousFile = matchingCoordinates[0]?.coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0]?.coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p?.coordinates[0] === previousKnownFile)?.coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p?.coordinates[1]) === previousRank)?.coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.Bishop) {
        const possiblePreviousCoordinates = whiteSquareCoordinates.includes(`${newFile}${newRank}`) ? whiteSquareCoordinates : blackSquareCoordinates
        const matchingCoordinates = possiblePreviousCoordinates.map(coordinates => ({
            ...previousState[coordinates], coordinates
        })).filter(piece => !!piece && piece.color === color && piece.pieceName === pieceName)
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0]?.coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0]?.coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p?.coordinates[0] === previousKnownFile)?.coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p?.coordinates[1]) === previousRank)?.coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.Rook) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return !!piece && piece.color === color && piece.pieceName === pieceName && (coordinates[0] === newFile || parseInt(coordinates[1]) === newRank)
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0]?.coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0]?.coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p?.coordinates[0] === previousKnownFile)?.coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p?.coordinates[1]) === previousRank)?.coordinates[0] as ChessboardFile
            } else {
                // determine which rook based on the presence of obstacle
                if (matchingCoordinates[0].coordinates[1] === matchingCoordinates[1].coordinates[1]) { //same rank
                    previousRank = parseInt(matchingCoordinates[0].coordinates[1])
                    const otherPiecesOnSameRank = Object.entries(previousState).filter(([coordinates, piece], index) => {
                        return !!piece && piece.pieceName !== pieceName && parseInt(coordinates[1]) === newRank
                    }).map(([coordinates, piece], index) => {
                        return {...piece, coordinates}
                    })

                    if (fileToNumber(otherPiecesOnSameRank[0].coordinates[0] as ChessboardFile) > newFileNumber) {
                        // obstacles are after new file
                        previousFile = numberToFile(Math.min(
                            fileToNumber(matchingCoordinates[0].coordinates[0] as ChessboardFile),
                            fileToNumber(matchingCoordinates[1].coordinates[0] as ChessboardFile),
                        ))
                    } else {
                        // obstacles are before new file
                        previousFile = numberToFile(Math.max(
                            fileToNumber(matchingCoordinates[0].coordinates[0] as ChessboardFile),
                            fileToNumber(matchingCoordinates[1].coordinates[0] as ChessboardFile),
                        ))

                    }
                } else if (matchingCoordinates[0].coordinates[0] === matchingCoordinates[1].coordinates[0]) { // same file
                    previousFile = matchingCoordinates[0].coordinates[0] as ChessboardFile
                    const otherPiecesOnSameFile = Object.entries(previousState).filter(([coordinates, piece], index) => {
                        return !!piece && piece.pieceName !== pieceName && coordinates[0] === newFile
                    }).map(([coordinates, piece], index) => {
                        return {...piece, coordinates}
                    })

                    if (parseInt(otherPiecesOnSameFile[0]?.coordinates[0]) > newRank) {
                        // obstacles are after new rank
                        previousRank = Math.min(
                            parseInt(matchingCoordinates[0].coordinates[1]),
                            parseInt(matchingCoordinates[1].coordinates[1]),
                        )
                    } else {
                        // obstacles are before new rank
                        previousRank = Math.max(
                            parseInt(matchingCoordinates[0].coordinates[1]),
                            parseInt(matchingCoordinates[1].coordinates[1]),
                        )
                    }
                } else { // different rank and file
                    const match = matchingCoordinates.filter(p => {
                        if (p.coordinates[0] === newFile) { // same file than destination
                            return Object.entries(previousState).filter(([coordinates, piece], index) => {
                                return !!piece && coordinates[0] === newFile && (newRank > parseInt(p.coordinates[1]) ? (
                                    parseInt(coordinates[1]) > parseInt(p.coordinates[1]) && parseInt(coordinates[1]) < newRank
                                ) : (
                                    parseInt(coordinates[1]) < parseInt(p.coordinates[1]) && parseInt(coordinates[1]) > newRank
                                ))
                            }).length === 0
                        } else { // same rank than destination
                            return Object.entries(previousState).filter(([coordinates, piece], index) => {
                                return !!piece && parseInt(coordinates[1]) === newRank && (newFileNumber > fileToNumber(p.coordinates[0] as ChessboardFile) ? (
                                    fileToNumber(coordinates[0] as ChessboardFile) > fileToNumber(p.coordinates[0] as ChessboardFile) && fileToNumber(coordinates[0] as ChessboardFile) < newFileNumber
                                ) : (
                                    fileToNumber(coordinates[0] as ChessboardFile) < fileToNumber(p.coordinates[0] as ChessboardFile) && fileToNumber(coordinates[0] as ChessboardFile) > newFileNumber
                                ))
                            }).length === 0
                        }
                    })
                    previousFile = match[0].coordinates[0] as ChessboardFile
                    previousRank = parseInt(match[0].coordinates[1])
                }
            }
        }
    } else if (pieceName === Piece.Queen) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return !!piece && piece.color === color && piece.pieceName === pieceName
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        if (matchingCoordinates.length === 1) {
            previousFile = matchingCoordinates[0]?.coordinates[0] as ChessboardFile
            previousRank = parseInt(matchingCoordinates[0]?.coordinates[1]) as ChessboardRanks
        } else {
            // should have additional info from txt to decide
            if (previousKnownFile) {
                previousRank = parseInt(matchingCoordinates.find(p => p?.coordinates[0] === previousKnownFile)?.coordinates[1])
            } else if (previousKnownRank) {
                previousFile = matchingCoordinates.find(p => parseInt(p?.coordinates[1]) === previousRank)?.coordinates[0] as ChessboardFile
            }
        }
    } else if (pieceName === Piece.King) {
        const matchingCoordinates = Object.entries(previousState).filter(([coordinates, piece], index) => {
            return piece && piece.color === color && piece.pieceName === pieceName
        }).map(([coordinates, piece], index) => {
            return {...piece, coordinates}
        })
        previousFile = matchingCoordinates[0]?.coordinates[0] as ChessboardFile
        previousRank = parseInt(matchingCoordinates[0]?.coordinates[1]) as ChessboardRanks
    }
    return {
        file: previousFile as ChessboardFile,
        rank: previousRank as ChessboardRanks,
    }
}
export const historyToHistoryStates = (history: Array<string>): Array<ChessboardState> => {
    const result = [initialState]
    history.forEach((h, index) => {
        const color = index % 2 === 0 ? Color.White : Color.Black

        const nextState = {...result[result.length - 1]}
        h = h.replace("+", "").replace("#", "")
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
            const pieceName = ["R", "N", "B", "K", "Q"].includes(hArray[0]) ? {
                R: Piece.Rook,
                N: Piece.Knight,
                B: Piece.Bishop,
                K: Piece.King,
                Q: Piece.Queen,
            }[hArray.shift()] : Piece.Pawn

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

            const previousPosition = getPreviousPiecePosition(result[result.length - 1], pieceName, file, rank, color, capture, previousKnownFile, previousKnownRank)
            // if(!previousPosition.file || !previousPosition.rank) {
            //     throw Error("missing previous position")
            // }

            if (capture && !nextState[`${file}${rank}`]) { // en passant
                if (color === Color.White) {
                    delete nextState[`${file}${rank - 1}`]
                } else {
                    delete nextState[`${file}${rank + 1}`]
                }
            }

            nextState[`${file}${rank}`] = nextState[`${previousPosition.file}${previousPosition.rank}`]
            delete nextState[`${previousPosition.file}${previousPosition.rank}`]
        }
        result.push(nextState)
    })
    return result
}