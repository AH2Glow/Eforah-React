import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/StateContext";
import { StyledLink } from "../../styled-components/navigation";
import { ProductSearch } from "./ProductSearch";

export const Header = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <StyledContainer>
            <h2>Market</h2>
            <ProductSearch />
            <StyledLink to="/shopping-cart">
                {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}{" "}
                items
            </StyledLink>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    grid-column: 2/-1;
    background: #fff;
`;
