// -- API & Library
import Styled from 'styled-components';

// -- Assets
import BG from './assets/image/BG.jpg';

export const Styled_ProfileSection01 = Styled.div`
    min-height: 100vh;
    width: 120%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Styled_ProfileSectionBackground = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 10%;
    width: 10%;

    background-color: red;
`;

export const Styled_ProfileSectionButton = Styled.button`
    height: 10rem;
    width: 10rem;

    border-radius: 10rem;
    overflow: hidden;

    background-color: green;
`;
