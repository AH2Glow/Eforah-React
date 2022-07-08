import { createContext, ReactNode, useState } from "react";

import data from "../products.json";

type ContextDefaultValueType = {
    cartItems: CartItem[];
    addItem: (productId: string) => void;
    searchInput: string;
    setSearchInput: (input: string) => void;
    numItems: number;
};

type CartItem = {
    id: string;
    name: string;
    description: string;
    quantity: number;
};

type PropTypes = {
    children: ReactNode;
};

export const CartContext = createContext({} as ContextDefaultValueType);

const CartProvider = ({ children }: PropTypes) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [searchInput, setSearchInput] = useState("");

    const addItem = (productId: string) => {
        const product = data.products.find((p) => p.id === productId);

        if (!product) return;

        const productInCart = cartItems.find((p) => p.id === product.id);

        if (!productInCart) {
            setCartItems((prev) => prev.concat({ ...product, quantity: 1 }));
        } else {
            const { id, quantity } = productInCart;
            setCartItems((prev) =>
                prev.map((p) =>
                    p.id === id
                        ? { ...productInCart, quantity: quantity + 1 }
                        : p
                )
            );
        }
    };

    const numItems = cartItems.reduce((acc, { quantity }) => acc + quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItem,
                searchInput,
                setSearchInput,
                numItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
