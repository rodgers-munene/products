import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";


function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product-page" element={<Products />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter