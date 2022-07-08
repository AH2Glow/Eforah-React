import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/StateContext";
import { ShoppingItem } from "./ShoppingItem";

export const ShoppingCart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <StyledContainer>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((cartItem) => (
                    <ShoppingItem key={cartItem.id} item={cartItem} />
                ))}
            </ul>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    background: #fff;
    color: #000;
`;
