import React, { useCallback } from "react"
import { useCartContext } from "../context/CartContext";


function AddToCart({ product }) {
    const { cart, addToCart, removeItem } = useCartContext();

    const handleAddToCart = useCallback(() => {
        addToCart(product);
    }, [addToCart, product]);

    const handleRemoveFromCart = useCallback(() => {
        removeItem(product);
    }, [removeItem, product]);

    if (cart[product.id]) {
        return (
            <div className="add-to-cart">
                <div onClick={handleRemoveFromCart} className="add">
                    -
                </div>
                <div>
                    {cart[product.id].quantity}
                </div>
                <div onClick={handleAddToCart} className="add">
                    +
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={handleAddToCart} className="add">
                Add To Cart
            </div>
        );
    }
}

export default AddToCart;