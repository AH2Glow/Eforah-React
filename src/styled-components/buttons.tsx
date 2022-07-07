import styled from "styled-components";
import { red, white } from "../variables/colors";

export const StyledButton = styled.button`
    padding: 1rem 2rem;
    background: ${white};
    color: ${red};
    cursor: pointer;
    border: none;
    flex: 1;

    &:hover {
        background: ${red};
        color: ${white};
    }
`;
