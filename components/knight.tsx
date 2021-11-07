import {Color} from "../interfaces/chessboard";

export interface KnightProps {
    fill: Color
}

function Knight({fill}: KnightProps) {
    return (
        <svg width="170" height="170" fill={fill} viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--stroke)"
                  d="M49.1052 38.3193L55.4587 44.6937L55.4587 44.6937L49.1052 38.3193ZM94.2401 29.9368L87.874 36.2986L87.8741 36.2987L94.2401 29.9368ZM47.3161 124.557L55.6423 121.14L55.6423 121.14L47.3161 124.557ZM51.766 130.503L55.8329 138.532C58.5612 137.15 60.401 134.477 60.7176 131.435C61.0343 128.393 59.7845 125.399 57.3994 123.484L51.766 130.503ZM127.628 131.204L122.091 124.109C119.79 125.905 118.502 128.705 118.637 131.621C118.773 134.537 120.314 137.207 122.772 138.782L127.628 131.204ZM132.387 123.702L141.165 125.687L141.165 125.687L132.387 123.702ZM127.584 110.339L133.091 103.22L133.091 103.22L127.584 110.339ZM110.576 97.1821L105.069 104.301L105.069 104.301L110.576 97.1821ZM126.76 52.2539L121.858 59.802L121.858 59.802L126.76 52.2539ZM99.5001 34.552L104.402 27.0039L104.402 27.0039L99.5001 34.552ZM94.4956 30.1927L100.866 23.8348L100.866 23.8347L94.4956 30.1927ZM55.4587 44.6937C66.4763 33.7121 74.1214 31.8771 78.4041 32.0063C82.8219 32.1396 86.0037 34.427 87.874 36.2986L100.606 23.575C96.9524 19.9187 89.6658 14.3378 78.9468 14.0145C68.0925 13.6871 55.9323 18.8073 42.7516 31.9449L55.4587 44.6937ZM55.6423 121.14C51.8581 111.919 46.772 97.1895 45.3694 82.2455C43.9517 67.1402 46.4349 53.688 55.4587 44.6937L42.7516 31.9449C28.1598 46.4892 25.8204 66.5842 27.4482 83.9274C29.091 101.432 34.9182 118.052 38.99 127.974L55.6423 121.14ZM57.3994 123.484C56.6293 122.866 56.029 122.082 55.6423 121.14L38.99 127.974C40.5712 131.827 43.0657 135.061 46.1326 137.522L57.3994 123.484ZM53.0838 143C53.0838 141.063 54.183 139.368 55.8329 138.532L47.699 122.475C40.2331 126.256 35.0838 134.019 35.0838 143H53.0838ZM58.0838 148C55.3224 148 53.0838 145.761 53.0838 143H35.0838C35.0838 155.703 45.3812 166 58.0838 166V148ZM120.084 148H58.0838V166H120.084V148ZM125.084 143C125.084 145.761 122.845 148 120.084 148V166C132.786 166 143.084 155.703 143.084 143H125.084ZM122.772 138.782C124.181 139.685 125.084 141.24 125.084 143H143.084C143.084 134.852 138.84 127.7 132.484 123.627L122.772 138.782ZM123.608 121.717C123.387 122.695 122.843 123.522 122.091 124.109L133.165 138.3C137.095 135.233 140 130.837 141.165 125.687L123.608 121.717ZM122.077 117.458C123.372 118.459 123.969 120.121 123.608 121.717L141.165 125.687C143.069 117.265 139.92 108.503 133.091 103.22L122.077 117.458ZM105.069 104.301L122.077 117.458L133.091 103.22L116.083 90.0634L105.069 104.301ZM98.3876 90.6851C98.3876 96.0131 100.855 101.041 105.069 104.301L116.083 90.0634C116.275 90.2123 116.388 90.4418 116.388 90.6851H98.3876ZM115.602 73.471C106.095 73.471 98.3876 81.178 98.3876 90.6851H116.388C116.388 91.1191 116.036 91.471 115.602 91.471V73.471ZM120.815 73.471H115.602V91.471H120.815V73.471ZM125.243 69.0432C125.243 71.4886 123.261 73.471 120.815 73.471V91.471C133.202 91.471 143.243 81.4297 143.243 69.0432H125.243ZM125.243 66.0369V69.0432H143.243V66.0369H125.243ZM121.858 59.802C123.969 61.1731 125.243 63.5195 125.243 66.0369H143.243C143.243 57.4241 138.885 49.3965 131.661 44.7058L121.858 59.802ZM94.5985 42.1001L121.858 59.802L131.661 44.7058L104.402 27.0039L94.5985 42.1001ZM88.1255 36.5506C89.5726 38.0004 91.8096 40.2891 94.5985 42.1001L104.402 27.0039C103.476 26.4028 102.551 25.5233 100.866 23.8348L88.1255 36.5506ZM87.8741 36.2987C87.9569 36.3816 88.04 36.4649 88.1256 36.5506L100.866 23.8347C100.781 23.7498 100.694 23.6625 100.606 23.5749L87.8741 36.2987Z"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M94.2401 29.9368C88.716 24.409 73.3034 14.2001 49.1052 38.3193C25.4895 61.8579 39.4602 105.414 47.3161 124.557C48.3001 126.955 49.8475 128.963 51.766 130.503C47.208 132.812 44.0838 137.541 44.0838 143C44.0838 150.732 50.3518 157 58.0838 157H120.084C127.816 157 134.084 150.732 134.084 143C134.084 138.046 131.511 133.693 127.628 131.204C129.969 129.378 131.694 126.766 132.387 123.702C133.519 118.693 131.646 113.481 127.584 110.339L110.576 97.1821C108.565 95.6265 107.388 93.2275 107.388 90.6851C107.388 86.1486 111.065 82.471 115.602 82.471H120.815C128.231 82.471 134.243 76.4592 134.243 69.0432V66.0369C134.243 60.4718 131.427 55.2848 126.76 52.2539L99.5001 34.552C97.6428 33.3459 96.0618 31.7619 94.4956 30.1927C94.4104 30.1073 94.3252 30.022 94.2401 29.9368Z"/>
        </svg>
    )
}

export default Knight