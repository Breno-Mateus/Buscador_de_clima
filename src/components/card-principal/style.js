import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.25rem;

    background: linear-gradient(90deg, #5a7cdc, #606dde);
    color: #fff;



    border-radius: 1.25rem;
    padding: 1.25rem;
`;

export const Imagem = styled.img`
    filter: drop-shadow(2px, 2px, 2px, rgba(0,0,0,0.2));
`;