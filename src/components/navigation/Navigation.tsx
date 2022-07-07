import styled from "styled-components";
import { StyledLink } from "../../styled-components/navigation";

export const Navigation = () => {
    return (
        <StyledContainer>
            <StyledNav>
                <StyledLink to="/">Products</StyledLink>
                <StyledLink to="/shopping-cart">Shopping Cart</StyledLink>
            </StyledNav>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    grid-row: 1/-1;
    background: #fff;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
`;
