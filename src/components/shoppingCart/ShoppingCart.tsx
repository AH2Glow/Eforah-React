import styled from "styled-components";
import { ShoppingItem } from "./ShoppingItem";

type CartItem = {
    id: string;
    name: string;
    description: string;
    quantity: number;
};

type Props = {
    productsInCart: Array<CartItem>;
};

export const ShoppingCart = ({ productsInCart }: Props) => {
    return (
        <StyledContainer>
            <h1>Shopping Cart</h1>

            <ul>
                {productsInCart.map((cartItem) => (
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
