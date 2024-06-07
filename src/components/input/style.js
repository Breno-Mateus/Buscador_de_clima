import styled from "styled-components";

export const StyledInput = styled.input`
    background: transparent;
    border: none;

    font-size: .9rem;
    color: black;

    &::placeholder {
        font-size: .9rem;
        color: #bdbdbd;
    }

    &:focus {
        outline: none;
    }
`;