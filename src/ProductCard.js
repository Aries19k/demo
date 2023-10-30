import React from "react";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" style={{width:"250px", height:"250px"}} src={product.images[0]} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Giá: {product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
