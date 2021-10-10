export declare type ChessboardProps = {
    fen?: string;
};

function Chessboard({fen}: ChessboardProps) {
    return (
        <iframe src={`https://fritz.chessbase.com?fen=${fen}`} style={{width: "760px", height: "480px"}}/>
    )
}

export default Chessboard
