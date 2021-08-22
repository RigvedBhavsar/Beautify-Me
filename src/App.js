import React, { useEffect, createContext, useReducer, useContext, useState } from 'react';
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { reducer, initialState } from './reducers/userReducer';
import './App.css';
import Appointment from './components/Appointment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import M from 'materialize-css';
import { Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

export const UserContext = createContext();

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });

        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
        
        // const user = JSON.parse(localStorage.getItem("user"))

        // if (user) {
        //     dispatch({ type: "USER", payload: user })
        //     history.push('/')
        // } else {
        //     history.push('/')
        // }
    }, []);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <div className="home">
                <BrowserRouter>
                    <Navbar totalItems={cart.total_items} />
                    {/* Roting PRoducts */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/signin">
                            <Signin />
                        </Route>

                        <Route path="/signup">
                            <Signup />
                        </Route>

                        <Route path="/appointment">
                            <Appointment />
                        </Route>

                        <Route path="/products">
                            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
                        </Route>

                        <Route exact path="/cart">
                            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                        </Route>

                        <Route path="/checkout" exact>
                            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                        </Route>
                    </Switch>
                    {/* <Routing/> */}
                </BrowserRouter>
            </div>
            {/* Add Componet List Here */}

            <div className="back-all">
                <About />
                <Contact />
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
