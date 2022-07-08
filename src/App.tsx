import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import styled from "styled-components";

import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import { ProductList } from "./components/productList/ProductList";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";
import CartProvider from "./contexts/StateContext";

export const App = () => {
    return (
        <CartProvider>
            <StyledContainer>
                <Header />
                <Navigation />

                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="shopping-cart" element={<ShoppingCart />} />
                </Routes>
            </StyledContainer>
        </CartProvider>
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
`;
