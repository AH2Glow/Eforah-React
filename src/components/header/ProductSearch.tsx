type PropTypes = {
    setSearchInput: (input: string) => void;
    searchInput: string;
};

export const ProductSearch = ({ setSearchInput, searchInput }: PropTypes) => {
    const onChange = (event: any) => {
        setSearchInput(event.target.value);
    };

    return <input onChange={onChange} value={searchInput} />;
};
