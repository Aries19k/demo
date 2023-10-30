import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({ images: [] });

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setProduct(res.data));
    }, [id]);

    return (
        <Container>
            <Row>
                <Col xs={10} md={6}>
                    <h1>{product.title}</h1>
                    <Carousel>
                        {product.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={10} md={6}>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock} in stock</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;
