export const enum Color {
    "Black"= "black",
    "White" = "white",
}

export const enum Piece {
    Rook = "Rook",
    Knight = "Knight",
    Bishop = "Bishop",
    Queen = "Queen",
    King = "King",
    Pawn = "Pawn",
}

export const enum ChessboardFile {
    a = "a",
    b = "b",
    c = "c",
    d = "d",
    e = "e",
    f = "f",
    g = "g",
    h = "h",
}

export type ChessboardRanks = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface ChessboardCoordinates {
    file: ChessboardFile;
    rank: ChessboardRanks;
}

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