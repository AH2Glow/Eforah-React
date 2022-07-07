import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    padding: 1rem 2rem;
    background: #fff;
    color: #000;
    display: inline-block;

    &:hover {
        background: red;
        color: white;
    }
`;
