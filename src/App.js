import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Auth from "./components/Auth";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Nav from "./components/Nav";

function App() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route exact path="/" element={<Products />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </BrowserRouter>
        </Provider>
    );
}

export default App;