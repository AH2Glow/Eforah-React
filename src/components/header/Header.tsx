import styled from "styled-components";
import { StyledLink } from "../../styled-components/navigation";
import { ProductSearch } from "./ProductSearch";

type PropTypes = {
    numberOfCartItems: number;
    searchInput: string;
    setSearchInput: (input: string) => void;
};

export const Header = ({
    numberOfCartItems,
    searchInput,
    setSearchInput,
}: PropTypes) => {
    return (
        <StyledContainer>
            <h2>Market</h2>

            <ProductSearch
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />

            <StyledLink to="/shopping-cart">
                {numberOfCartItems} items
            </StyledLink>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    grid-column: 2/-1;
    background: #fff;
`;
