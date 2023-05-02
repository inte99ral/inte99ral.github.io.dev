// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileBackground3Dtest = Styled.div`
    width: 200px;
    height: 200px;
    background-color: #bee9b4;

    & section {
        width: 100px;
        height: 100px;
        transform-style: preserve-3d;
        transform: rotate3d(1, 1, 1, 30deg);

        & .face {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
            backface-visibility: inherit;
            font-size: 60px;
            color: #fff;
        }

        & .front {
            background-color: rgba(90, 90, 90, 0.7);
            transform: translateZ(50px);
        }

        & .back {
            background: rgba(0, 210, 0, 0.7);
            transform: rotateY(180deg) translateZ(50px);
        }

        & .right {
            background: rgba(210, 0, 0, 0.7);
            transform: rotateY(90deg) translateZ(50px);
        }

        & .left {
            background: rgba(0, 0, 210, 0.7);
            transform: rotateY(-90deg) translateZ(50px);
        }

        & .top {
            background: rgba(210, 210, 0, 0.7);
            transform: rotateX(90deg) translateZ(50px);
        }

        & .bottom {
            background: rgba(210, 0, 210, 0.7);
            transform: rotateX(-90deg) translateZ(50px);
        }
    }
`;
