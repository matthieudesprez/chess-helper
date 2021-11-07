import styles from './chessboard.module.css'
import {ChessboardFile, Color, Coordinates, Row} from "../interfaces/chessboard";
import Pawn from "./pawn";
import Rook from "./rook";
import Knight from "./knight";
import Bishop from "./bishop";
import Queen from "./queen";
import King from "./king";
import {useState} from "react";

export declare type ChessboardProps = {
    fen?: string;
};

export interface ChessboardPiece {
    color: Color;
    component: (any) => JSX.Element
}

export type ChessboardState = { [key: string]: ChessboardPiece }

const initialState: ChessboardState = {
    A8: {color: Color.Black, component: Rook},
    B8: {color: Color.Black, component: Knight},
    C8: {color: Color.Black, component: Bishop},
    D8: {color: Color.Black, component: Queen},
    E8: {color: Color.Black, component: King},
    F8: {color: Color.Black, component: Bishop},
    G8: {color: Color.Black, component: Knight},
    H8: {color: Color.Black, component: Rook},
    A7: {color: Color.Black, component: Pawn},
    B7: {color: Color.Black, component: Pawn},
    C7: {color: Color.Black, component: Pawn},
    D7: {color: Color.Black, component: Pawn},
    E7: {color: Color.Black, component: Pawn},
    F7: {color: Color.Black, component: Pawn},
    G7: {color: Color.Black, component: Pawn},
    H7: {color: Color.Black, component: Pawn},
    A2: {color: Color.White, component: Pawn},
    B2: {color: Color.White, component: Pawn},
    C2: {color: Color.White, component: Pawn},
    D2: {color: Color.White, component: Pawn},
    E2: {color: Color.White, component: Pawn},
    F2: {color: Color.White, component: Pawn},
    G2: {color: Color.White, component: Pawn},
    H2: {color: Color.White, component: Pawn},
    A1: {color: Color.White, component: Rook},
    B1: {color: Color.White, component: Knight},
    C1: {color: Color.White, component: Bishop},
    D1: {color: Color.White, component: Queen},
    E1: {color: Color.White, component: King},
    F1: {color: Color.White, component: Bishop},
    G1: {color: Color.White, component: Knight},
    H1: {color: Color.White, component: Rook},
}

const mapIndexToRow = (index: number): Row => {
    switch (index % 8) {
        case 0:
            return Row.A;
        case 1:
            return Row.B;
        case 2:
            return Row.C;
        case 3:
            return Row.D;
        case 4:
            return Row.E;
        case 5:
            return Row.F;
        case 6:
            return Row.G;
        default:
            return Row.H;
    }
}

const mapIndexToFile = (index: number): ChessboardFile => Math.floor(index / 8) + 1 as ChessboardFile

const mapIndexToCoordinates = (index: number): Coordinates => {
    return {
        row: mapIndexToRow(index),
        file: mapIndexToFile(index),
    }
}

const mapIndexToInitialPiece = (state: ChessboardState, index: number) => {
    const coordinates = mapIndexToCoordinates(index);
    // const piece = initialState[`${coordinates.row}${coordinates.file}`]
    const piece = state[`${coordinates.row}${coordinates.file}`]
    return piece && <piece.component fill={piece.color}/>
}

const fenToState = (fen: string): ChessboardState => {
    const [initialPositions, currentPlayer, castleInformation, enPassantCoordinates, numberOfMovesSinceLastCatch, moveNumber] = fen.split(" ")
    console.log(initialPositions, currentPlayer, castleInformation, enPassantCoordinates, numberOfMovesSinceLastCatch, moveNumber);
    const positions = initialPositions.split("/")
    const state = {}
    positions.forEach((position, fileIndex) => {
        let row = "";
        position.split("").forEach((pieceLetter: string) => {
            if (/^\d+$/.test(pieceLetter)) {
                row += "x".repeat(parseInt(pieceLetter));
            } else {
                row += pieceLetter;
            }
        });

        row.split("").forEach((pieceLetter: string, rowIndex) => {
            const coordinates = {
                row: mapIndexToRow(rowIndex),
                file: fileIndex + 1,
            }
            const coordinatesString = `${coordinates.row}${coordinates.file}`;
            switch (pieceLetter) {
                case "r":
                    state[coordinatesString] = {color: Color.Black, component: Rook};
                    break;
                case "n":
                    state[coordinatesString] = {color: Color.Black, component: Knight};
                    break;
                case "b":
                    state[coordinatesString] = {color: Color.Black, component: Bishop};
                    break;
                case "q":
                    state[coordinatesString] = {color: Color.Black, component: Queen};
                    break;
                case "k":
                    state[coordinatesString] = {color: Color.Black, component: King};
                    break;
                case "p":
                    state[coordinatesString] = {color: Color.Black, component: Pawn};
                    break;
                case "R":
                    state[coordinatesString] = {color: Color.White, component: Rook};
                    break;
                case "N":
                    state[coordinatesString] = {color: Color.White, component: Knight};
                    break;
                case "B":
                    state[coordinatesString] = {color: Color.White, component: Bishop};
                    break;
                case "Q":
                    state[coordinatesString] = {color: Color.White, component: Queen};
                    break;
                case "K":
                    state[coordinatesString] = {color: Color.White, component: King};
                    break;
                case "P":
                    state[coordinatesString] = {color: Color.White, component: Pawn};
                    break;
                default:
                    break
            }
        })
    })
    return state;
}
const fenToCurrentPlayer = (fen: string): Color => {
    const [_, currentPlayer, ...rest] = fen.split(" ")
    return currentPlayer === "w" ? Color.White : Color.Black
}

const fenToCastleInformation = (fen: string) => {
    const [_, __, castleInformation, ...rest] = fen.split(" ")
    return {
        whiteKingCastle: castleInformation.includes("K"),
        whiteQueenCastle: castleInformation.includes("Q"),
        blackKingCastle: castleInformation.includes("k"),
        blackQueenCastle: castleInformation.includes("q"),
    }
}

function Chessboard({fen}: ChessboardProps) {
    const [state, setState] = useState(fenToState(fen));
    const [currentPlayer, setCurrentPlayer] = useState(fenToCurrentPlayer(fen));

    return (
        <div className={styles.chessboardContainer}>
            <div className={styles.chessboardRowsInfo}>
                {Array(8).fill(null).map((_, index) => (
                    <div key={index}>{mapIndexToRow(index + index * 8)}</div>
                ))}
            </div>
            <div className={styles.chessboard}>
                {Array(64).fill(null).map((_, index) => (
                    <div key={index} className={styles.cell}>{mapIndexToInitialPiece(state, index)}</div>
                ))}
            </div>
            <div className={styles.chessboardFilesInfo}>
                {Array(8).fill(null).map((_, index) => (
                    <div key={index}>{index + 1}</div>
                ))}
            </div>
            <div>
                Next move: {currentPlayer}
            </div>
        </div>
    )
}

export default Chessboard
