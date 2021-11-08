import openings from "../data/openings.json";
import {fenToState, historyToHistoryStates, movesToHistory} from "../utils/chessboard";

for (const opening of openings) {
    test(`${opening.name} ${opening.moves} computed states should match fen ${opening.fen}`, () => {
        const moveHistory = movesToHistory(opening.moves)
        const historyStates = historyToHistoryStates(moveHistory)
        const fenState = fenToState(opening.fen)
        expect(Object.entries(historyStates[historyStates.length - 1]).every(([k, v]) => {
            return v.color === fenState[k].color && v.component === fenState[k].component && v.pieceName === fenState[k].pieceName
        })).toBeTruthy()
    });
}
