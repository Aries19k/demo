import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => setProducts(res.data.products));
    }, []);
    const linkStyle = {
        whiteSpace: "nowrap", // Prevent text from wrapping
        //overflow: "hidden",   // Hide overflowing content
        textOverflow: "ellipsis", // Add an ellipsis (...) to indicate hidden text
        textDecoration: "none",   // Remove the default underline
        color: "black", // Set the link color
        padding:"10px"
    };
    return (
        <>
            <Navbar />
            <Carousel />
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} md={4}>
                            <div>
                                <Link to={`/products/${product.id}`} style={linkStyle}>
                                    <ProductCard product={product} />
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ProductList;
