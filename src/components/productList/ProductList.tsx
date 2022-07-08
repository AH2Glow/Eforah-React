import { ProductItem } from "./ProductItem";
import styled from "styled-components";
import data from "../../products.json";
import { useContext } from "react";
import { CartContext } from "../../contexts/StateContext";

type Product = {
    id: string;
    name: string;
    description: string;
};

export const ProductList = () => {
    const { searchInput } = useContext(CartContext);

    const products = searchInput
        ? data.products.filter((product) => product.name.includes(searchInput))
        : data.products;

    return (
        <StyledContainer>
            <h1>Products</h1>
            <StyledList>
                {products.map((product: Product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </StyledList>
        </StyledContainer>
    );
};

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1px;
    padding: 1px 1px 1px 0;
    max-width: 1200px;
`;

const StyledContainer = styled.div`
    overflow-y: scroll;
    background: #fff;
`;
