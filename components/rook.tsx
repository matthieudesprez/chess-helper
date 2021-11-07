import {Color} from "../interfaces/chessboard";

export interface RookProps {
    fill: Color
}

function Rook({fill}: RookProps) {
    return (
        <svg width="170" height="170" fill={fill} viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--stroke)"
                  d="M96 40H105C105 35.0294 100.971 31 96 31V40ZM75 40V31C70.0294 31 66 35.0294 66 40H75ZM75 53L75 62C77.3869 62 79.6761 61.0518 81.364 59.364C83.0518 57.6761 84 55.387 84 53H75ZM58 53H49C49 57.9706 53.0294 62 58 62L58 53ZM58 40H67C67 35.0294 62.9706 31 58 31V40ZM39 40V31C34.0294 31 30 35.0294 30 40H39ZM39 69H30C30 69.379 30.0239 69.7577 30.0717 70.1337L39 69ZM46.8667 130.951L51.4589 138.691C54.5432 136.861 56.2467 133.375 55.795 129.817L46.8667 130.951ZM123.133 130.951L114.205 129.817C113.753 133.375 115.457 136.861 118.541 138.691L123.133 130.951ZM131 69L139.928 70.1338C139.976 69.7577 140 69.3791 140 69L131 69ZM131 40H140C140 35.0294 135.971 31 131 31V40ZM113 40V31C108.029 31 104 35.0294 104 40H113ZM113 53L113 62C115.387 62 117.676 61.0518 119.364 59.364C121.052 57.6761 122 55.387 122 53H113ZM96 53H87C87 57.9706 91.0294 62 96 62L96 53ZM96 31H75V49H96V31ZM66 40V53H84V40H66ZM75 44L58 44L58 62L75 62L75 44ZM67 53V40H49V53H67ZM58 31H39V49H58V31ZM30 40V69H48V40H30ZM30.0717 70.1337L37.9384 132.085L55.795 129.817L47.9283 67.8663L30.0717 70.1337ZM42.2745 123.211C35.5441 127.204 30.9998 134.566 30.9998 143H48.9998C48.9998 141.18 49.9671 139.576 51.4589 138.691L42.2745 123.211ZM30.9998 143C30.9998 155.703 41.2973 166 53.9998 166V148C51.2384 148 48.9998 145.761 48.9998 143H30.9998ZM53.9998 166H116V148H53.9998V166ZM116 166C128.702 166 139 155.703 139 143H121C121 145.761 118.761 148 116 148V166ZM139 143C139 134.567 134.456 127.204 127.725 123.211L118.541 138.691C120.033 139.576 121 141.18 121 143H139ZM132.061 132.085L139.928 70.1338L122.072 67.8662L114.205 129.817L132.061 132.085ZM140 69V40H122V69H140ZM131 31H113V49H131V31ZM104 40V53H122V40H104ZM113 44L96 44L96 62L113 62L113 44ZM105 53V40H87V53H105Z"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M96 40H75V53L58 53V40H39V69L46.8667 130.951C42.7556 133.39 39.9998 137.873 39.9998 143C39.9998 150.732 46.2678 157 53.9998 157H116C123.732 157 130 150.732 130 143C130 137.873 127.244 133.39 123.133 130.951L131 69V40H113V53L96 53V40Z"/>
        </svg>
    )
}

export default Rook