import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";


function AppRouter() {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/product-page" element={<Products />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter