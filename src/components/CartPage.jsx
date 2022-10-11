import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

export default function CartPage() {
    const cart = useSelector(state => state.cart);

    const cartItems = useMemo(() => {
        let totalItems = 0;
        if (Object.keys(cart).length > 0) {
            Object.keys(cart).forEach((productId) => {
                totalItems += cart[productId].quantity;
            });
        }
        return totalItems;
    }, [cart]);

    const cartTotal = useMemo(() => {
        let total = 0;
        if (Object.keys(cart).length > 0) {
            Object.keys(cart).forEach((productId) => {
                total += cart[productId].price * cart[productId].quantity;
            });
        }
        return total;
    }, [cart]);

    if (cartItems === 0) {
        return (
            <div>
                Hey your cart is empty, please add some products!
                <Link to="/products/electronics">Go to products</Link>
            </div>
        );
    } else {
        return (
            <div className="cart-items-contaioner">
                {Object.keys(cart).map((productId) => (
                    <CartProduct key={productId} product={cart[productId]} />
                ))}
                <div className="cart-total">
                    Total for this cart would be ${cartTotal}
                </div>
            </div>
        );
    }
}