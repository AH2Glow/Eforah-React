import { ChangeEvent, useContext } from "react";
import { CartContext } from "../../contexts/StateContext";

export const ProductSearch = () => {
    const { searchInput, setSearchInput } = useContext(CartContext);

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setSearchInput(event.target.value);

    return <input onChange={onChange} value={searchInput} />;
};
