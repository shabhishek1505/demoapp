import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartProvider>
          {/* Header/Navbar (categories) */}
          <Navbar />
          {/* Product list component */}
          <Switch>
            <div className="content">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products/:categoryName">
                <ProductList />
              </Route>
              <Route path="/not-found">
                <NotFound />
              </Route>
            </div>
          </Switch>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}
