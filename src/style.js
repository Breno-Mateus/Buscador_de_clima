import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        height: 100vh;
        width: 100%;

        font-family: "Poppins", sans-serif;

        background: linear-gradient(to left, #48484a, #48485a);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Container = styled.div`
    background: #fff;

    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .4rem;

    padding: 1.125rem;

    box-shadow: .313rem .313rem .313rem rgba(0, 0, 0, 0.1);
`;

export const SecondaryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border: 1px solid #bdbdbd;
    border-radius: 0.625rem;
    padding: .5rem;
`;

export const CardSecundario = styled.div`
    margin-top: 1.875rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .75rem;
`;

export const NameCity = styled.h1`
    text-align: center;
    margin-bottom: .313rem;
    font-weight: 600;
    color: #372f3f;
`;