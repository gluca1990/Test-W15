import {Container, Nav, Navbar, NavDropdown, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBarComponent() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">myWpfrontEnd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/article">Articles</Link>
                    </Nav>

                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    onChange={e =>{ setQuery(e.target.value); console.log(query)}}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button onClick={() => navigate('search/' + query)}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}