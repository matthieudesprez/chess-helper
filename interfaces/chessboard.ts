export const enum Color {
    "Black"= "black",
    "White" = "white",
}

export const enum Piece {
    "Rook",
    "Knight",
    "Bishop",
    "Queen",
    "King",
    "Pawn",
}

export const enum Row {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
}

export type ChessboardFile = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface Coordinates {
    row: Row;
    file: ChessboardFile;
}