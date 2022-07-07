import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styled-components/buttons";

type Product = {
    id: string;
    name: string;
    description: string;
};

type PropTypes = {
    addProduct: (productId: string) => void;
    product: Product;
};

export const ProductItem = ({
    addProduct,
    product: { name, description, id },
}: PropTypes) => {
    const [showDescription, setShowDescription] = useState(false);

    const onClick = () => addProduct(id);
    const toggleInfo = () => setShowDescription(!showDescription);

    return (
        <StyledProductItem>
            <h3>{name}</h3>
            <div className="product-img-container">
                <img alt={name} src={require(`../../img/${name}.png`)} />
            </div>

            {showDescription && <p>{description}</p>}

            <StyledButtonsContainer>
                <StyledButton onClick={toggleInfo}>
                    {showDescription ? "Hide" : "Show"} description
                </StyledButton>
                <StyledButton onClick={onClick}>Add</StyledButton>
            </StyledButtonsContainer>
        </StyledProductItem>
    );
};

const StyledProductItem = styled.li`
    background: #fff;
`;

const StyledButtonsContainer = styled.div`
    display: flex;
`;
