import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";

function Navbar() {

    const { loading, error, data: categories } = useApi(
        "https://fakestoreapi.com/products/categories",
        null
    );

    const history = useHistory();

    useEffect(() => {
        if (!loading && categories?.length > 0) {
            history.push(`/products/${categories[0]}`);
        }
    }, [categories, loading, history]);

    if (loading) {
        return <div className="loader">Categories is Loading</div>
    }
    else if (error) {
        return <div className="error">OOps please reload the page</div>
    } else if (categories.length === 0) {
        return <div>No Categories Found</div>
    }
    else {
        return (
            <div className="products">
                {categories.map((category) => (
                    <NavLink
                        key={`category-${category}`}
                        className="product-category"
                        activeClassName="product-category--selected"
                        to={`/products/${category}`}
                    >
                        {category}
                    </NavLink>
                ))}
            </div>
        )

    }
}

export default Navbar