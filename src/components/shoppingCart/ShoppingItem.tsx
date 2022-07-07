type CartItem = {
    id: string;
    name: string;
    description: string;
    quantity: number;
};

type PropTypes = {
    item: CartItem;
};

export const ShoppingItem = ({ item }: PropTypes) => {
    return (
        <li>
            <h3>
                {item.name} ({item.quantity})
            </h3>
        </li>
    );
};
