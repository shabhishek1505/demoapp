import React from "react";
import { Link } from "react-router-dom"

function Home({children}) {
    return (
        <div>
            <h1>Fake Store App</h1>
            <div>Hello from the Home Component</div>
            {/* We will not use the a tags*/}
            <Link to="/products">Go to Products</Link>
            <br/>
            <Link to="/not-found">Go to NOt found</Link>
            {children}
        </div>
    );
}

export default Home