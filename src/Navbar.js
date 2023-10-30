import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
function ColorSchemesExample() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <div>
                <Navbar.Brand href="#home">Eshop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">All Products</Nav.Link>
                    <Nav.Link href="#">Create Product</Nav.Link>
                    <Nav.Link href="#"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}

export default ColorSchemesExample;