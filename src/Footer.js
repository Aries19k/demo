import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutColWidthBreakpointExample() {
    return (
        <div className="bg-secondary text-light">
            <Row md={3}>
                <Col>C O M P A N Y</Col>
                <Col xs={6}>l E G A L</Col>
                <Col>S U B S C R I B E</Col>
            </Row>
            <Row md={3}>
                <Col> </Col>
            </Row>
            <Row md={3}>
                <Col>About us</Col>
                <Col xs={6}>Private Policy</Col>
                <Col>Subscribe to get specials offers, free giveaways and once-in-a-lifetime deals.</Col>
            </Row>
            <Row md={3}>
                <Col>Contact</Col>
                <Col xs={6}>Refund Policy</Col>

            </Row>
            <Row md={3}>
                <Col>Affilate Program</Col>
                <Col xs={6}>Terms of service</Col>
                <Col><input placeholder="Enter your mail"/> <button type={"submit"}>Subscribe</button></Col>
            </Row>
            <Row md={3}>
                <Col>Press</Col>
            </Row>
        </div>
    );
}

export default RowColLayoutColWidthBreakpointExample;