import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import styled from "styled-components";
import data from "./products.json";

import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import { ProductsList } from "./components/productList/ProductList";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";

type CartItem = {
    id: string;
    name: string;
    description: string;
    quantity: number;
};

export const App = () => {
    const [productsInCart, setProductsInCart] = useState(Array<CartItem>);
    const [searchInput, setSearchInput] = useState("");

    const addProduct = (productId: string) => {
        const product = data.products.find(p => p.id === productId);

        if (!product) return;

        const productInCart = productsInCart.find(productInCart => productInCart.id === product.id);

        if (!productInCart) {
            setProductsInCart(productsInCart.concat({ ...product, quantity: 1 }));
        } else {
            const newProducts = productsInCart.map((p) => p.id === productInCart.id ? { ...productInCart, quantity: productInCart.quantity + 1 } : p
            )

            setProductsInCart(newProducts)
        }
    };

    return (
        <StyledContainer>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} numberOfCartItems={productsInCart.reduce((acc, cur) => acc + cur.quantity, 0)} />
            <Navigation />

            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductsList
                            addProduct={addProduct}
                            products={data.products}
                            searchInput={searchInput}
                        />
                    }
                />
                <Route path="shopping-cart" element={<ShoppingCart productsInCart={productsInCart} />} />
            </Routes>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    background: #000;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    grid-gap: 1px;
    width: 100vw;
    height: 100vh;
`