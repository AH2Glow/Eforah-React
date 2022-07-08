import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/StateContext";
import { StyledButton } from "../../styled-components/buttons";

type Product = {
    id: string;
    name: string;
    description: string;
};

type PropTypes = {
    product: Product;
};

export const ProductItem = ({
    product: { name, description, id },
}: PropTypes) => {
    const [showDescription, setShowDescription] = useState(false);

    const { addItem } = useContext(CartContext);

    const onClick = () => addItem(id);
    const toggleInfo = () => setShowDescription((prev) => !prev);

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
