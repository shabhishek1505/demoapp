import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function Home({ children }) {
    const { isLoading, data, loadError } = useSelector(state => state.user);

    if (isLoading) {
        return <div>User data is loading please wait</div>
    } else if (loadError) {
        return <div>User failed to load</div>;
    } else if (data) {
        return (
            <div>
                <h1>Hello {data.name.firstname}</h1>
                <h1>Fakestore App</h1>
                <div>Hello from home component</div>

                <Link to="/prodects">Go to Products</Link>
                <br />
                <Link to="/not-found">Go to NOt Found</Link>
                {children}
            </div>
        );
    } else {
        return <div>User data is null,please try again</div>;
    }
}

export default Home;