import { ProductItem } from "./ProductItem";
import styled from "styled-components";

type Product = {
    id: string;
    name: string;
    description: string;
};

type PropTypes = {
    products: Array<Product>;
    addProduct: (productId: string) => void;
    searchInput: string;
};

export const ProductsList = ({
    products,
    addProduct,
    searchInput,
}: PropTypes) => {
    searchInput &&
        (products = products.filter((product) =>
            product.name.includes(searchInput)
        ));

    return (
        <StyledContainer>
            <h1>Products</h1>
            <StyledList>
                {products.map((product: Product) => (
                    <ProductItem
                        product={product}
                        key={product.id}
                        addProduct={addProduct}
                    />
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
