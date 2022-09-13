import styled from 'styled-components';
import background from './../assets/bg.png';

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#f3f4f6",
    light2: "#e5e7e8",
    dark1: "#1f2937",
    dark2: "#4b5563",
    dark3: "#9ca3af",
    red: "#DC2626",
}

//Styled Components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    aligh-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;