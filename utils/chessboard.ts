import {Color} from "../interfaces/chessboard";
import Rook from "../components/rook";
import Knight from "../components/knight";
import Bishop from "../components/bishop";
import Queen from "../components/queen";
import King from "../components/king";
import Pawn from "../components/pawn";
import {ChessboardState} from "../components/chessboard";

// const fenToState = (fen: string): ChessboardState => {
//     const [initialPositions, currentPlayer, castleInformation, enPassantCoordinates, numberOfMovesSinceLastCatch, moveNumber] = fen.split(" ")
//     console.log(initialPositions, currentPlayer, castleInformation, enPassantCoordinates, numberOfMovesSinceLastCatch, moveNumber);
//     const positions = initialPositions.split("/")
//     const state = {}
//     positions.forEach((position, fileIndex) => {
//         let row = "";
//         position.split("").forEach((pieceLetter: string) => {
//             if (/^\d+$/.test(pieceLetter)) {
//                 row += "x".repeat(parseInt(pieceLetter));
//             } else {
//                 row += pieceLetter;
//             }
//         });
//
//         row.split("").forEach((pieceLetter: string, rowIndex) => {
//             const coordinates = {
//                 row: mapIndexToFile(rowIndex),
//                 file: fileIndex + 1,
//             }
//             const coordinatesString = `${coordinates.row}${coordinates.file}`;
//             switch (pieceLetter) {
//                 case "r":
//                     state[coordinatesString] = {color: Color.Black, component: Rook};
//                     break;
//                 case "n":
//                     state[coordinatesString] = {color: Color.Black, component: Knight};
//                     break;
//                 case "b":
//                     state[coordinatesString] = {color: Color.Black, component: Bishop};
//                     break;
//                 case "q":
//                     state[coordinatesString] = {color: Color.Black, component: Queen};
//                     break;
//                 case "k":
//                     state[coordinatesString] = {color: Color.Black, component: King};
//                     break;
//                 case "p":
//                     state[coordinatesString] = {color: Color.Black, component: Pawn};
//                     break;
//                 case "R":
//                     state[coordinatesString] = {color: Color.White, component: Rook};
//                     break;
//                 case "N":
//                     state[coordinatesString] = {color: Color.White, component: Knight};
//                     break;
//                 case "B":
//                     state[coordinatesString] = {color: Color.White, component: Bishop};
//                     break;
//                 case "Q":
//                     state[coordinatesString] = {color: Color.White, component: Queen};
//                     break;
//                 case "K":
//                     state[coordinatesString] = {color: Color.White, component: King};
//                     break;
//                 case "P":
//                     state[coordinatesString] = {color: Color.White, component: Pawn};
//                     break;
//                 default:
//                     break
//             }
//         })
//     })
//     return state;
// }
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